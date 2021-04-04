const express = require('express');
const path = require('path');

const create = async () => {

    const app = express();
    app.use(express.static(path.join(__dirname, "..", "build")));
    app.use(express.static('public'))

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../build/index.html'));
    });

    app.get('/api/hello', (req, res) => {
        res.send('Hello World from Azure App Service');
    });

    app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(500).send('Internal Server Error');
    });
    return app;
};

module.exports = {
    create
};