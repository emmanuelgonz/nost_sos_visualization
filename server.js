const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/env.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'env.js'));
});

app.get('/js/amqp-websocket-client.mjs', (req, res) => {
    res.sendFile(path.join(__dirname, 'js', 'amqp-websocket-client.mjs'));
});

app.get('/spatial/Optimization_result.geojson', (req, res) => {
    res.sendFile(path.join(__dirname, 'spatial', 'Optimization_result.geojson'));
});

app.get('/spatial/WBD_10_HU2_4326.geojson', (req, res) => {
    res.sendFile(path.join(__dirname, 'spatial', 'WBD_10_HU2_4326.geojson'));
});

app.listen(port, () => {
    console.log(`Cesium app listening at http://localhost:${port}`);
});
