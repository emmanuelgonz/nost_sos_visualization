# Snow Observing Systems (SOS) Visualizer

This project delivers a 3D visualization web application that receives and processes messages sent through the Novel Observing Strategies Testbed (NOS-T) event broker.

## Demo

<!-- [![Watch the video](media/image.png)](https://youtu.be/zKBMltZmC8g) -->

<div style="display: inline-flex; align-items: center;">
  <!-- Video Thumbnail -->
  <a href="https://www.youtube.com/watch?v=zKBMltZmC8g" target="_blank" style="display: inline-block;">
    <img src="https://img.youtube.com/vi/zKBMltZmC8g/0.jpg" style="width: 100%; display: block;">
  </a>

  <!-- Play Button -->
  <a href="https://www.youtube.com/watch?v=zKBMltZmC8g" target="_blank" style="display: inline-block;">
    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_play_button_icon_%282013%E2%80%932017%29.svg" 
         style="width: 50px; height: auto; margin-left: 5px;">
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
