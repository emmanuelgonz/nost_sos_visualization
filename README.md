# Snow Observing Systems (SOS) Visualizer

This project delivers a 3D visualization web application that receives and processes messages sent through the Novel Observing Strategies Testbed (NOS-T) event broker.

## Demo

<video width="600" controls>
  <source src="./media/nost_sos_demonstration_cones_layers_compressed.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

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
