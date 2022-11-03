const express = require('express');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(`${__dirname}/dist`));

app.all('*', (req, res) => {
    const filePath = `${__dirname}/dist/${req.path}.html`;
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            res.sendFile(`${__dirname}/dist/404.html`);
        } else {
            res.sendFile(`${__dirname}/dist/${req.path}.html`);
        }
    });
});

app.listen(port, () => {
    console.log('Server is up on port 3000');
});
