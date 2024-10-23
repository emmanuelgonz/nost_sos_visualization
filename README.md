# Snow Observing Systems (SOS) Visualizer

This project delivers a 3D visualization web application that receives and processes messages sent through the Novel Observing Strategies Testbed (NOS-T) event broker.

<a href="https://youtu.be/zKBMltZmC8g" target="_blank">
  <img src="media/image.png" alt="Watch the video" />
</a>

> **Note:** Click the image above with the white play icon to watch the demonstration.

## Table of Contents

- [Preparation](#preparation)
- [Run Application](#run-application)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
<!-- - [Contributing](#contributing)
- [License](#license) -->

## Preparation

### Node.JS Installation

- Install Node.JS on Linux:

```bash
sudo apt update && sudo apt install nodejs && sudo apt install npm
```

For Windows and macOS instructions, refer to [Download Node.js](https://nodejs.org/en/download/package-manager).

- Confirm installation:

```bash
node -v
npm -v
```

> **Note:** You will see the installed version number of node and npm if the installation was successful.

### Cloning Repo

- Clone GitHub repo:

```bash
git clone git@github.com:emmanuelgonz/nost_sos_visualization.git
```

- Navigate to cloned repo:

```bash
cd nost_sos_visualization
```

### Install NPM dependencies

- Install dependencies:

```bash
npm install
```

### Preparing Cesium

- Create Cesium account:

Sign up for a free Cesium ion account [here](https://ion.cesium.com/signup). Then, copy your access token [here](https://ion.cesium.com/tokens?).

### Credentials

- Create env.js file

```bash
touch env.js
```

To the file, add the contents: 

```
var HOST="nost.smce.nasa.gov"
var RABBITMQ_PORT=15670
var KEYCLOAK_PORT=8443
var CLIENT_ID=<request from NOS-T administrators>
var CLIENT_SECRET=<request from NOS-T administrators>
var USERNAME=<request from NOS-T administrators>
var PASSWORD=<request from NOS-T administrators>
var TOKEN=<Cesium access token>
```

## Run Application

Start application:

```bash
node server.js
```

## Project Structure

- env.js: Environment configuration.
- js/: JavaScript modules.
- media/: Media assets.
- package-lock.json: Locks the versions of the dependencies and their sub-dependencies.
- package.json: Contains metadata about the project, including the project's dependencies and their versions.
- public/: Publicly accessible files.
- server.js: Main server file.
- spatial/: GeoJSON files for spatial data.

A directory tree structure is provided below:

```
├── README.md
├── env.js 
├── js
│   └── amqp-websocket-client.mjs
├── media
│   ├── image.png
│   └── nost_sos_demonstration_cones_layers_compressed.mp4
├── package-lock.json
├── package.json
├── public
│   └── index.html
├── server.js
└── spatial
    ├── Optimization_result.geojson
    └── WBD_10_HU2_4326.geojson
```

## Dependencies

The project depends on the previously installed dependencies:

- [Cesium](https://cesium.com/platform/cesiumjs/)
- [Express](https://expressjs.com/)