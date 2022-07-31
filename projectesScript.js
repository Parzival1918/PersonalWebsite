const {readFileSync, promises: fsPromises} = require('fs');

const contents = await fsPromises.readFile('projectText.txt', 'utf-8');

document.getElementById("fill").innerHTML = contents;
