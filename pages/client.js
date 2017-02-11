import React from 'react';
import io from 'socket.io-client';
import os from 'os';

let socket;
const HOST = `http://${os.hostname()}`;

if (HOST === 'http://localhost') {
  socket = io(`${HOST}:3000`);
} else {
  socket = io(HOST);
}

console.log(`HOST: ${HOST}`);

class client extends React.Component {
  componentDidMount() {
    socket.on('hello', (data) => {
      console.log('Hello event received at client.js');
      console.log(data);
    });
  }

  newGame() {
    socket.emit('newGame', 'Emitting new game from client.js');
  }

  emitEvent(eventName) {
    console.log(`Emitting event ${eventName} from client.js`);

    socket.emit(eventName, {
      data: {
        eventName,
        timeStamp: Date.now()
      }
    });
  }

  render() {
    return (
      <div >
        <style jsx>{`
          .box {
            cursor: pointer;
            float: left;
            width: 50%;
            height:500px;
          }
          .stef{
            background-image: url(./static/stefstuntpiloot.png);
            background-repeat: no-repeat;
            background-size: contain;
          }
          .banana{
            background-image: url(./static/banana.jpg);
            background-repeat: no-repeat;
            background-size: contain;
          }
        `}</style>
        <button onClick={this.newGame}>New Game</button>
        <div className="box stef" onClick={() => this.emitEvent('stuntEvent')}>
          <img src="" />

        </div>
        <div className="box banana" onClick={() => this.emitEvent('bananaEvent')}>

        </div>
      </div>
    );
  }
}

export default client;
