const fs = require('fs')
const pug = require('pug');
const files = fs.readdirSync('./static/files').filter(x => x !== 'index.html');

fs.writeFileSync('./static/files/index.html', pug.renderFile('./files.pug', { files }));
