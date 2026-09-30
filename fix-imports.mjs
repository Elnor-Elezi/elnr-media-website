import fs from 'fs';
import path from 'path';

// Fix Navbar
let navbarPath = path.join(process.cwd(), 'src/components/Navbar.jsx');
let navbar = fs.readFileSync(navbarPath, 'utf8');
navbar = navbar.replace(/import\s+\{\s*Link,\s*\}\s+from\s+'react-router-dom';/, "import Link from 'next/link';");
fs.writeFileSync(navbarPath, navbar);

// Fix SEO
let seoPath = path.join(process.cwd(), 'src/components/SEO.jsx');
let seo = fs.readFileSync(seoPath, 'utf8');
seo = seo.replace(/import \{ Helmet \} from 'react-helmet-async';/, "import Head from 'next/head';");
seo = seo.replace(/<Helmet>/g, "<Head>");
seo = seo.replace(/<\/Helmet>/g, "</Head>");
fs.writeFileSync(seoPath, seo);

// Fix ServiceDetail
let servicePath = path.join(process.cwd(), 'src/app/services/[slug]/page.jsx');
let service = fs.readFileSync(servicePath, 'utf8');
service = service.replace(/import \{ useParams, Navigate, Link \} from 'react-router-dom'/, "import Link from 'next/link';\nimport { useParams, useRouter } from 'next/navigation';");
service = service.replace(/export default function ServiceDetail\(\) \{/, "export default function ServiceDetail() {\n  const router = useRouter();");
service = service.replace(/return <Navigate to="\/services" replace \/>;/, "router.replace('/services');\n    return null;");
fs.writeFileSync(servicePath, service);

// Fix BlogPost
let blogPath = path.join(process.cwd(), 'src/app/blog/[slug]/page.jsx');
let blog = fs.readFileSync(blogPath, 'utf8');
blog = blog.replace(/import \{ useParams, Navigate, Link \} from 'react-router-dom'/, "import Link from 'next/link';\nimport { useParams, useRouter } from 'next/navigation';");
blog = blog.replace(/export default function BlogPost\(\) \{/, "export default function BlogPost() {\n  const router = useRouter();");
blog = blog.replace(/return <Navigate to="\/blog" replace \/>;/, "router.replace('/blog');\n    return null;");
fs.writeFileSync(blogPath, blog);

console.log('Fixed imports!');
