import React from 'react';
import Head from 'next/head';
import io from 'socket.io-client';

const port = process.env.PORT || 3000;

const socket = io(`http://localhost:${port}`);

class Index extends React.Component {
  emitSceneData(event) {
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
  }

  render() {
    return (
      <div>
        <Head>
          <title>My page title</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <script src="https://aframe.io/releases/0.4.0/aframe.min.js"></script>
        </Head>
        <a-scene physics="debug: true" id="thescene" onClick={this.emitSceneData}>
          <a-plane static-body position="0 0 -8" rotation="-90 0 0" width="10" height="10" color="#7BC8A4"></a-plane>
          <a-entity dynamic-body="shape: box" id="lucifer" position="0 0.5 -5" rotation="0 0 0" color="#4CC3D9" depth="0.5" heigt="0.5" width="5">
            <a-animation
              attribute="rotation"
              dur="10000"
              fill="forwards"
              easing="linear"
              to="0 360 0"
              repeat="indefinite"
            >
            </a-animation>
            <a-cylinder id="cylinder" position="0 0 0"></a-cylinder>
            <a-entity id="move" ref={this.test}>
              <a-box id="hefboom" position="2 0.5 0" rotation="0 0 0" color="#4CC3D9" depth="0.5" height="0.5" width="4">
              </a-box>
              <a-sphere id="stef" position="4 0.5 0" radius="0.75" color="#EF2D5E">
              </a-sphere>
              <a-animation
                id="genius"
                attribute="rotation"
                begin="up"
                dur="1000"
                direction="alternate"
                fill="forwards"
                to="0 0 65"
                repeat="1"
              >
              </a-animation>
            </a-entity>
          </a-entity>
        </a-scene>
      </div>
    );
  }
}

export default Index;
