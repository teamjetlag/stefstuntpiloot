import React from 'react';
import Head from 'next/head';
import io from 'socket.io-client';
import os from 'os';
import applyImpulse from './../static/impulse';
import _JSXStyle from 'styled-jsx/style'

import websocket from '../static/websocket'

let socket = websocket()





// Instantiate variables used for refs
let boxB;

class Index extends React.Component {
  newGame() {
    socket.emit('newGame');
  }

  handleSceneClick() {
    console.log('Scene was clicked');

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

    socket.on('again', () => {
      location.reload();
    });

    // Stunt event
    socket.on('stuntEvent', (data) => {
      console.log('Stunt event received at index.j');
      console.log(data);

      // Apply impulse
      applyImpulse(boxB);
    });

    // Banana event
    socket.on('bananaEvent', (data) => {
      console.log('Banana event received at index.html');
      console.log(data);

      // TODO: Herre's banana
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
        <header>
          <button onClick={this.newGame}>New Game</button>
        </header>
        <a-scene physics="debug: false; friction: 0.002;" physics-world="0 -9.8 0">
          <a-entity rotation="-45 0 0" position="0 5 8">
            <a-camera />
          </a-entity>
          <a-plane static-body position="0 -1 0" rotation="-90 0 0" width="20" height="20" color="#7BC8A4" />
          <a-cylinder id="boxA" color="white" static-body position="0 0 0" width="0.5" height="1" depth="0.5" />
          <a-sphere
            id="boxB"
            color="red"
            dynamic-body="mass: 50"
            position="0 -5 0.2"
            radius="0.5"
            ref={(boxb) => { boxB = boxb; }}
          />

          <a-entity position="0.85 -0.35 0">
            <a-entity position="2 -2 0" rotation="0 0 25">
              <a-box static-body position="4 0 0.12" depth="0.1" width="3" color="yellow" />
              <a-box static-body position="4 -0.1 0" depth="0.24" height="0.8" width="3" color="yellow" />
              <a-box static-body position="4 0 -0.12" depth="0.1" width="3" color="yellow" />
              <a-box static-body position="2.5 0 0" depth="0.24" height="1.3" width="0.1" color="yellow" />
            </a-entity>
            <a-cylinder dynamic-body mass="2" position="4.5 0.5 0" color="green" height="0.1" radius="0.4" rotation="0 90 90" />
            <a-cylinder dynamic-body mass="2" position="5   1   0" color="blue" height="0.1" radius="0.4" rotation="0 90 90" />
            <a-cylinder dynamic-body mass="2" position="5.5 1.5 0" color="orange" height="0.1" radius="0.4" rotation="0 90 90" />
          </a-entity>

          <a-entity position="-0.85 -0.35 0">
            <a-entity position="-2 -2 0" rotation="0 0 -25">
              <a-box static-body position="-4 0 0.12" depth="0.1" width="3" color="yellow" />
              <a-box static-body position="-4 -0.1 0" depth="0.24" height="0.8" width="3" color="yellow" />
              <a-box static-body position="-4 0 -0.12" depth="0.1" width="3" color="yellow" />
              <a-box static-body position="-2.5 0 0" depth="0.24" height="1.3" width="0.1" color="yellow" />
            </a-entity>
            <a-cylinder dynamic-body mass="2" position="-4.5 0.5 0" color="green" height="0.1" radius="0.4" rotation="0 90 90" />
            <a-cylinder dynamic-body mass="2" position="-5   1   0" color="blue" height="0.1" radius="0.4" rotation="0 90 90" />
            <a-cylinder dynamic-body mass="2" position="-5.5 1.5 0" color="orange" height="0.1" radius="0.4" rotation="0 90 90" />
          </a-entity>

          <a-entity position="0 -0.35 -0.85">
            <a-entity position="0 -2 -2" rotation="0 90 25">
              <a-box static-body position="4 0 0.12" depth="0.1" width="3" color="yellow" />
              <a-box static-body position="4 -0.1 0" depth="0.24" height="0.8" width="3" color="yellow" />
              <a-box static-body position="4 0 -0.12" depth="0.1" width="3" color="yellow" />
              <a-box static-body position="2.5 0 0" depth="0.24" height="1.3" width="0.1" color="yellow" />
            </a-entity>
            <a-cylinder dynamic-body mass="2" position="0 0.5 -4.5" color="green" height="0.1" radius="0.4" rotation="0 0 90" />
            <a-cylinder dynamic-body mass="2" position="0 1   -5" color="blue" height="0.1" radius="0.4" rotation="0 0 90" />
            <a-cylinder dynamic-body mass="2" position="0 1.5 -5.5" color="orange" height="0.1" radius="0.4" rotation="0 0 90" />
          </a-entity>

          <a-entity position="0 -0.35 0.85">
            <a-entity position="0 -2 2" rotation="0 -90 25">
              <a-box static-body position="4 0 0.12" depth="0.1" width="3" color="yellow" />
              <a-box static-body position="4 -0.1 0" depth="0.24" height="0.8" width="3" color="yellow" />
              <a-box static-body position="4 0 -0.12" depth="0.1" width="3" color="yellow" />
              <a-box static-body position="2.5 0 0" depth="0.24" height="1.3" width="0.1" color="yellow" />
            </a-entity>
            <a-cylinder dynamic-body mass="2" position="0 0.5 4.5" color="green" height="0.1" radius="0.4" rotation="0 0 90" />
            <a-cylinder dynamic-body mass="2" position="0 1   5" color="blue" height="0.1" radius="0.4" rotation="0 0 90" />
            <a-cylinder dynamic-body mass="2" position="0 1.5 5.5" color="orange" height="0.1" radius="0.4" rotation="0 0 90"/>
          </a-entity>
        </a-scene>

        <script src="/static/script.js"></script>
      </div>
    );
  }
}

export default Index;
