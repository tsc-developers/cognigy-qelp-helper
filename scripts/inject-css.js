const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '../src/TutorialViewer.css');
const jsPath = path.join(__dirname, '../src/TutorialViewer.js');

const cssContent = fs.readFileSync(cssPath, 'utf8')
  .replace(/\\/g, '\\\\')      // escape backslashes
  .replace(/`/g, '\\`')        // escape backticks
  .replace(/\$/g, '\\$');      // escape $

const jsContent = fs.readFileSync(jsPath, 'utf8');
const newJsContent = jsContent.replace(
  /const injectedStyles = `__INJECT_CSS_HERE__`;/,
  `const injectedStyles = \`${cssContent}\`;`
);

fs.writeFileSync(jsPath, newJsContent, 'utf8');
console.log('✅ CSS injected into TutorialViewer.js');
