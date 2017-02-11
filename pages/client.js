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
      <div>
        <button onClick={() => this.emitEvent('stuntEvent')}>STUNT</button>
        <button onClick={() => this.emitEvent('bananaEvent')}>BANANA</button>
      </div>
    );
  }
}

export default client;
