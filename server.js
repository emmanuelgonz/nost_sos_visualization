const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// app.get('/env.js', (req, res) => {
//     res.sendFile(path.join(__dirname, 'env.js'));
// });
app.get('/env', (req, res) => {
    res.json({
        HOST: process.env.HOST,
        RABBITMQ_RELAY_PORT: process.env.RABBITMQ_RELAY_PORT,
        KEYCLOAK_PORT: process.env.KEYCLOAK_PORT,
        CLIENT_ID: process.env.CLIENT_ID,
        CLIENT_SECRET: process.env.CLIENT_SECRET_KEY,
        USERNAME: process.env.USERNAME,
        PASSWORD: process.env.PASSWORD,
        TOKEN: process.env.TOKEN
    });
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
