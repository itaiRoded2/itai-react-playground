const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing Angular chunk paths for GitHub Pages...');

const mainJsPath = path.join(__dirname, '../build/js/ForEmbedAngular/main.23dcd94834071479.js');

try {
  // Read the main.js file
  let content = fs.readFileSync(mainJsPath, 'utf8');
  
  // Replace the hardcoded /js/ForEmbedAngular/ path with /itai-react-playground/js/ForEmbedAngular/
  // This regex finds webpack's chunk loading path
  const originalContent = content;
  
  // Replace various patterns where webpack hardcodes the path
  content = content.replace(/(['"])\/js\/ForEmbedAngular\//g, '$1/itai-react-playground/js/ForEmbedAngular/');
  
  if (content !== originalContent) {
    fs.writeFileSync(mainJsPath, content, 'utf8');
    console.log('✅ Successfully patched main.js with correct GitHub Pages path');
    console.log('   Changed: /js/ForEmbedAngular/ → /itai-react-playground/js/ForEmbedAngular/');
  } else {
    console.log('⚠️  No paths found to replace in main.js');
    console.log('   This might mean Angular uses a different path pattern');
  }
} catch (error) {
  console.error('❌ Error patching main.js:', error.message);
  process.exit(1);
}