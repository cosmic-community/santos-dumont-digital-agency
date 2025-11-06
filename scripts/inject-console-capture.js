const fs = require('fs');
const path = require('path');

const buildDir = path.join(process.cwd(), '.next', 'server', 'app');

function injectScript(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes('dashboard-console-capture.js')) {
      return;
    }
    
    const scriptTag = '<script src="/dashboard-console-capture.js"></script>';
    
    if (content.includes('<head>')) {
      content = content.replace('<head>', `<head>${scriptTag}`);
      fs.writeFileSync(filePath, content);
      console.log(`✓ Injected console capture into ${path.basename(filePath)}`);
    }
  } catch (err) {
    console.error(`Error processing ${filePath}:`, err);
  }
}

function walkDir(dir) {
  try {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        walkDir(filePath);
      } else if (file.endsWith('.html')) {
        injectScript(filePath);
      }
    });
  } catch (err) {
    console.log('Build directory not found, skipping injection');
  }
}

walkDir(buildDir);
console.log('Console capture script injection complete');