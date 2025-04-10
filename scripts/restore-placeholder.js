// scripts/restore-placeholder.js
const fs = require('fs');
const path = require('path');

const jsPath = path.join(__dirname, '../src/TutorialViewer.js');
let jsContent = fs.readFileSync(jsPath, 'utf8');

jsContent = jsContent.replace(
  /const injectedStyles = `[\s\S]*?`;/,
  `const injectedStyles = \`__INJECT_CSS_HERE__\`;`
);

fs.writeFileSync(jsPath, jsContent, 'utf8');
console.log('🧼 Restored CSS placeholder in TutorialViewer.js');
