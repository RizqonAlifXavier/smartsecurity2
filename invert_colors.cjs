const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else if (file.endsWith('.vue')) {
            results.push(file);
        }
    });
    return results;
}

const vueFiles = walk('d:/Program IT/smart_security2/app');

vueFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace white transparent with black transparent
    content = content.replace(/rgba\(\s*255\s*,\s*255\s*,\s*255\s*,/g, 'rgba(0, 0, 0,');
    
    // Replace dark transparent with white transparent
    content = content.replace(/rgba\(\s*15\s*,\s*15\s*,\s*15\s*,/g, 'rgba(255, 255, 255,');
    
    // Replace another dark color used in app.vue background
    content = content.replace(/rgba\(\s*10\s*,\s*10\s*,\s*10\s*,/g, 'rgba(240, 240, 240,');
    
    // Replace specific "color: white" and "color: #fff" where appropriate
    if (file.includes('products.vue') || file.includes('TestimonialsSection.vue')) {
        content = content.replace(/color:\s*white;/g, 'color: var(--text-primary);');
    }
    
    fs.writeFileSync(file, content);
});
console.log('Replaced colors successfully!');
