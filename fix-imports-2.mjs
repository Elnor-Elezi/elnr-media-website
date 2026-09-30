import fs from 'fs';

const filesLevel1 = [
  'src/app/terms/page.jsx',
  'src/app/services/page.jsx',
  'src/app/privacy/page.jsx',
  'src/app/pricing/page.jsx',
  'src/app/contact/page.jsx',
  'src/app/blog/page.jsx',
  'src/app/about/page.jsx'
];

const filesLevel2 = [
  'src/app/services/[slug]/page.jsx',
  'src/app/blog/[slug]/page.jsx'
];

filesLevel1.forEach(f => {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    content = content.replace(/from '\.\.\/components/g, "from '../../components");
    content = content.replace(/from '\.\.\/hooks/g, "from '../../hooks");
    fs.writeFileSync(f, content);
    console.log('Fixed', f);
  }
});

filesLevel2.forEach(f => {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    content = content.replace(/from '\.\.\/components/g, "from '../../../components");
    content = content.replace(/from '\.\.\/hooks/g, "from '../../../hooks");
    fs.writeFileSync(f, content);
    console.log('Fixed', f);
  }
});
