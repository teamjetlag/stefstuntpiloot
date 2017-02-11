import io from 'socket.io-client';
import os from 'os';
export default function (){


  let socket ;

    const HOST = `http://${os.hostname()}`;

    if (HOST === 'http://localhost') {
      socket = io(`${HOST}:3000`);
    } else {
      socket = io(HOST);
    }



  return socket

}

