import React from 'react';
import Head from 'next/head';
import io from 'socket.io-client';
import os from 'os';
// import aframe from 'aframe';
// import physics from 'aframe-physics-system';
// import applyImpulse from './../static/impulse.js';

// physics.registerAll();

let socket;
const HOST = `http://${os.hostname()}`;

if (HOST === 'http://localhost') {
  socket = io(`${HOST}:3000`);
} else {
  socket = io(HOST);
}

console.log(`HOST: ${HOST}`);

class Index extends React.Component {
  handleSceneClick(event) {
    console.log('Scene was clicked');
    console.log(event);

    socket.emit('sceneClicked', {
      data: {
        event: 'Scene clicked',
        timeStamp: Date.now()
      }
    });
  }

  componentDidMount() {
    socket.on('hello', (data) => {
      console.log(data);
    });

    socket.on('sceneUpdate', (data) => {
      console.log('Scene update received from server to client');
      console.log(data);

      // TODO: Apply impulse
      // applyImpulse();
    });
  }

  render() {
    return (
      <div>
        <Head>
          <title>My page title</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <script src="/static/aframe.min.js"></script>
          <script src="/static/aframe-physics-system.js"></script>
        </Head>
        <a-scene physics="debug: false; friction:0.0001" physics-world="0 -9.8 0" onClick={this.handleSceneClick}>
          <a-entity rotation="-45 0 0" position="0 10 16">
            <a-camera></a-camera>
          </a-entity>

          <a-plane static-body position="0 -1 0" rotation="-90 0 0" width="20" height="20" color="#7BC8A4"></a-plane>

          {/* Dynamic box */}
          <a-cylinder id="boxA" color="white" static-body position="0 0 0" width="0.5" height="1" depth="0.5"></a-cylinder>

          {/* Dynamic box */}
          <a-sphere id="boxB" color="red" dynamic-body="mass: 20" position="0 -5 0.2" radius="0.5"></a-sphere>

          <a-entity>
            <a-entity position="2 -0.5 0">
              <a-entity position="1 -1.85 0" rotation="0 0 25">
                <a-box static-body position="4 0 0.1" depth="0.1" width="3" color="yellow"></a-box>
                <a-box static-body position="4 -0.1 0" depth="0.14" height="0.8" width="3" color="yellow"></a-box>
                <a-box static-body position="4 0 -0.1" depth="0.1" width="3" color="yellow"></a-box>
                <a-box static-body position="2.5 0 0" depth="0.24" height="1.3" width="0.1" color="yellow"></a-box>
              </a-entity>
              <a-cylinder dynamic-body rotation="90 0 0" mass="5" position="3.5 0.5 0" color="green" height="0.1" radius="0.4"></a-cylinder>
              <a-cylinder dynamic-body rotation="90 0 0" mass="5" position="4.5 1 0" color="blue" height="0.1" radius="0.4"></a-cylinder>
              <a-cylinder dynamic-body rotation="90 0 0" mass="5" position="5.5 1.5 0" color="orange" height="0.1" radius="0.4"></a-cylinder>
            </a-entity>
          </a-entity>

          <a-entity rotation="0 180 0">
            <a-entity position="2 -0.5 0">
              <a-entity position="1 -1.85 0" rotation="0 0 25">
                <a-box static-body position="4 0 0.1" depth="0.1" width="3" color="yellow"></a-box>
                <a-box static-body position="4 -0.1 0" depth="0.14" height="0.8" width="3" color="yellow"></a-box>
                <a-box static-body position="4 0 -0.1" depth="0.1" width="3" color="yellow"></a-box>
                <a-box static-body position="2.5 0 0" depth="0.24" height="1.3" width="0.1" color="yellow"></a-box>
              </a-entity>
              <a-cylinder dynamic-body rotation="90 180 0" mass="5" position="3.5 0.5 0" color="green" height="0.1" radius="0.4"></a-cylinder>
              <a-cylinder dynamic-body rotation="90 180 0" mass="5" position="4.5 1 0" color="blue" height="0.1" radius="0.4"></a-cylinder>
              <a-cylinder dynamic-body rotation="90 180 0" mass="5" position="5.5 1.5 0" color="orange" height="0.1" radius="0.4"></a-cylinder>
            </a-entity>
          </a-entity>
        </a-scene>

        <script src="/static/script.js"></script>
      </div>
    );
  }
}

export default Index;
