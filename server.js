const http = require('http');
const express = require('express');
const next = require('next');
const socketIo = require('socket.io');

// Setup the next app
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const PORT = process.env.PORT || 3000;

app.prepare().then(() => {
  // Create express server
  const expressServer = express();

  // Let express handle the paths and give it back to the next request handler
  expressServer.get('*', (req, res) => {
    handle(req, res);
  });

  // Create HTTP server with the express server for the websocket
  const httpServer = http.Server(expressServer);
  const io = socketIo(httpServer);

  // Handle the websocket connection
  io.on('connection', (socket) => {
    console.log('Socket server connected...');

    socket.emit('hello', 'Hello from server');

    // New game
    socket.on('newGame', () => {
      io.emit('again');
    });

    // Stunt event
    socket.on('stuntEvent', (data) => {
      console.log('Stunt event received at server');
      console.log(data);

      // Emit the stuntEvent to all clients
      io.emit('stuntEvent', data);
    });

    // Banana event
    socket.on('bananaEvent', (data) => {
      console.log('Banana event received at server');
      console.log(data);

      // Emit the bananaEvent to all clients
      io.emit('bananaEvent', data);
    });
  });

  // Start the HTTP server
  httpServer.listen(PORT, (err) => {
    if (err) {
      throw err;
    }

    return console.log(`> Express server ready on http://localhost:${PORT}`);
  });
});
