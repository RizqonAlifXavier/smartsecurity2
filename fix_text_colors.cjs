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
    
    if (file.includes('Navbar.vue')) {
        content = content.replace(/color:\s*var\(--white\);/g, 'color: var(--red);');
    } else {
        content = content.replace(/color:\s*var\(--white\);/g, 'color: var(--text-primary);');
    }
    
    fs.writeFileSync(file, content);
});
console.log('Replaced text colors successfully!');
