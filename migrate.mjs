import fs from 'fs';
import path from 'path';

const srcDir = path.join(process.cwd(), 'src');
const pagesDir = path.join(srcDir, 'pages');
const appDir = path.join(srcDir, 'app');

if (!fs.existsSync(appDir)) {
  fs.mkdirSync(appDir, { recursive: true });
}

// Route mapping
const routeMap = {
  'AboutPage.jsx': 'about',
  'BlogPage.jsx': 'blog',
  'BlogPost.jsx': 'blog/[slug]',
  'ContactPage.jsx': 'contact',
  'Dashboard.jsx': 'dashboard',
  'Home.jsx': '',
  'PricingPage.jsx': 'pricing',
  'PrivacyPolicy.jsx': 'privacy',
  'ServiceDetail.jsx': 'services/[slug]',
  'ServicesPage.jsx': 'services',
  'TermsOfService.jsx': 'terms'
};

// 1. Move files
if (fs.existsSync(pagesDir)) {
  const files = fs.readdirSync(pagesDir);
  files.forEach(file => {
    if (routeMap[file] !== undefined) {
      const routePath = routeMap[file];
      const targetDir = path.join(appDir, routePath);
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }
      const targetFile = path.join(targetDir, 'page.jsx');
      fs.copyFileSync(path.join(pagesDir, file), targetFile);
      console.log(`Copied ${file} to ${routePath}/page.jsx`);
    }
  });
}

// 2. Search and replace in all .jsx files in src
function walkSync(dir, filelist = []) {
  if (!fs.existsSync(dir)) return filelist;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const dirFile = path.join(dir, file);
    const dirent = fs.statSync(dirFile);
    if (dirent.isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else {
      if (dirFile.endsWith('.jsx')) {
        filelist.push(dirFile);
      }
    }
  }
  return filelist;
}

const allJsxFiles = walkSync(srcDir);

allJsxFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Add "use client" if it uses hooks or framer-motion (Next.js App Router defaults to Server Components)
  // For simplicity, we add "use client" to everything except layout.jsx for now.
  // Actually, we'll just add it to files that have 'useReact' or 'framer-motion' or 'lucide-react'
  const needsClient = content.includes('useScroll') || content.includes('useState') || content.includes('useEffect') || content.includes('useRef') || content.includes('framer-motion') || content.includes('lucide-react') || content.includes('react-three') || content.includes('next/navigation');
  
  if (needsClient && !content.startsWith('"use client"')) {
    content = '"use client";\n' + content;
  }

  // Replace Link
  content = content.replace(/import\s+\{\s*Link\s*\}\s+from\s+['"]react-router-dom['"]/g, "import Link from 'next/link'");
  content = content.replace(/<Link([^>]+)to=/g, '<Link$1href=');
  
  // Replace useLocation
  content = content.replace(/import\s+\{\s*(.*?)useLocation(.*?)\s*\}\s+from\s+['"]react-router-dom['"]/g, "import { $1 $2 } from 'react-router-dom';\nimport { usePathname } from 'next/navigation'");
  content = content.replace(/import\s+\{\s+\}\s+from\s+['"]react-router-dom['"];?\n/g, "");
  content = content.replace(/import\s+\{\s*useLocation\s*\}\s+from\s+['"]react-router-dom['"]/g, "import { usePathname } from 'next/navigation'");
  content = content.replace(/useLocation\(\)/g, "usePathname()");
  content = content.replace(/const\s+\{\s*pathname\s*\}\s*=\s*usePathname\(\)/g, "const pathname = usePathname()");
  content = content.replace(/location\.pathname/g, "pathname");

  // Fix mixed imports (e.g. `import { Link, useLocation }`)
  content = content.replace(/import\s+\{\s*Link\s*,\s*useLocation\s*\}\s+from\s+['"]react-router-dom['"]/g, "import Link from 'next/link';\nimport { usePathname } from 'next/navigation'");

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
