import fs from 'fs';

const replaces = [
  {
    file: 'src/app/services/lead-generation/page.jsx',
    changes: [[/from '\.\.\/\.\.\/components/g, "from '../../../components"], [/from '\.\.\/\.\.\/hooks/g, "from '../../../hooks"]]
  },
  {
    file: 'src/app/services/content-authority/page.jsx',
    changes: [[/from '\.\.\/\.\.\/components/g, "from '../../../components"], [/from '\.\.\/\.\.\/hooks/g, "from '../../../hooks"]]
  },
  {
    file: 'src/app/services/seo-organic/page.jsx',
    changes: [[/from '\.\.\/\.\.\/components/g, "from '../../../components"], [/from '\.\.\/\.\.\/hooks/g, "from '../../../hooks"]]
  },
  {
    file: 'src/app/services/revenue-system/page.jsx',
    changes: [[/from '\.\.\/\.\.\/components/g, "from '../../../components"], [/from '\.\.\/\.\.\/hooks/g, "from '../../../hooks"]]
  },
  {
    file: 'src/app/insights/[slug]/page.jsx',
    changes: [[/from '\.\.\/\.\.\/components/g, "from '../../../components"], [/from '\.\.\/\.\.\/data/g, "from '../../../data"]]
  },
  {
    file: 'src/app/blog/[slug]/page.jsx',
    changes: [[/from '\.\.\/data/g, "from '../../../data"]]
  },
  {
    file: 'src/app/blog/page.jsx',
    changes: [[/from '\.\.\/data/g, "from '../../data"]]
  }
];

replaces.forEach(({file, changes}) => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    changes.forEach(([regex, replacement]) => {
      content = content.replace(regex, replacement);
    });
    fs.writeFileSync(file, content);
    console.log('Fixed', file);
  } else {
    console.log('Not found:', file);
  }
});
