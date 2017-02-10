const http = require('http');
const express = require('express');
const next = require('next');
const socketIo = require('socket.io');

// Setup the next app
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  // Create express server
  const expressServer = express();

  // Let express handle the paths and give it back to the next request handler
  expressServer.get('*', (req, res) => {
    handle(req, res);
  });

  // Start the express server
  expressServer.listen(3000, (err) => {
    if (err) {
      throw err;
    }

    return console.log('> Express server ready on http://localhost:3000');
  });

  // Create HTTP server for the websocket
  const httpServer = http.createServer();
  const io = socketIo(httpServer);

  // Handle the websocket connection
  io.on('connection', (client) => {
    console.log('Socket client connected...');

    client.emit('hello', 'Hello from server');

    client.on('sceneClicked', (data) => {
      console.log('Scene clicked data received at server');
      console.log(data);
    });
  });

  // Start the HTTP server
  httpServer.listen(3030, (err) => {
    if (err) {
      throw err;
    }

    return console.log('> Websocket server ready on http://localhost:3030');
  });
});
