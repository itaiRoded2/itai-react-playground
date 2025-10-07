const fs = require('fs-extra');
const path = require('path');

const sourceAngular = path.join(__dirname, '../public/js/ForEmbedAngular');
const destAngular = path.join(__dirname, '../build/js/ForEmbedAngular');

const sourceHtml = path.join(__dirname, '../public/angular-wrapper.html');
const destHtml = path.join(__dirname, '../build/angular-wrapper.html');

// Copy Angular files
fs.copySync(sourceAngular, destAngular);
console.log('✅ Copied Angular files to build/js/ForEmbedAngular');

// Copy HTML wrapper
fs.copySync(sourceHtml, destHtml);
console.log('✅ Copied angular-wrapper.html to build/');