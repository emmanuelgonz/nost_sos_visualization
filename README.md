# Snow Observing Systems (SOS) Visualizer

This project delivers a 3D visualization web application that receives and processes messages sent through the Novel Observing Strategies Testbed (NOS-T) event broker.

## Demo

<div style="position: relative; text-align: center;">
    <a href="https://www.youtube.com/watch?v=zKBMltZmC8g" target="_blank">
        <img src="images/image.png" alt="Watch the video" style="width: 100%; max-width: 600px; height: auto;">
        <img src="play-button.png" alt="Play" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 100px; height: 100px;">
    </a>
</div>

## Preparation

- Install Node.JS on Linux:
```
sudo apt update && sudo apt install nodejs && sudo apt install npm
```

For Windows and macOS instructions, refer to [Download Node.js](https://nodejs.org/en/download/package-manager).

- Confirm installation:
```
node -v
npm -v
```
> **Note:** You will see the installed version number of node and npm if the installation was successful.

- Install dependencies:

```
npm install
```

## Run Application

Start application:

```
node server.js
```
