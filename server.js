const express = require('express');
const path = require('path');

const port = 443;

const app = express();

const distPath = path.join(__dirname, '/dist');

app.use(express.static(distPath));
app.listen(port);

console.log('serving content from path: ', distPath);
console.log('Server started at', port);
