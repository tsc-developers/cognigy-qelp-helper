// scripts/inject-css.js
const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '../src/TutorialViewer.css');
const jsPath = path.join(__dirname, '../src/TutorialViewer.js');

const cssContent = fs.readFileSync(cssPath, 'utf8')
  .replace(/\\/g, '\\\\')
  .replace(/`/g, '\\`')
  .replace(/\$/g, '\\$');

let jsContent = fs.readFileSync(jsPath, 'utf8');

jsContent = jsContent.replace(
  /const injectedStyles = `[\s\S]*?`;/,
  `const injectedStyles = \`${cssContent}\`;`
);

fs.writeFileSync(jsPath, jsContent, 'utf8');
console.log('✅ CSS injected into TutorialViewer.js');
