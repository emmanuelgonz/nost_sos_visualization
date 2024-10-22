# Snow Observing Systems (SOS) Visualizer

This project delivers a 3D visualization web application that receives and processes messages sent through the Novel Observing Strategies Testbed (NOS-T) event broker.

## Demo

<!-- [![Watch the video](media/image.png)](https://youtu.be/zKBMltZmC8g) -->

<a href="https://youtu.be/zKBMltZmC8g" target="_blank">
  <img src="media/image.png" alt="Watch the video" />
</a>

> **Note:** Click the image above with the white play icon to watch the demonstration.

## Preparation

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

- Install dependencies:

```bash
npm install
```

## Run Application

Start application:

```bash
node server.js
```