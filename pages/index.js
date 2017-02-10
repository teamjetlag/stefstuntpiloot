import React from 'react';
import Head from 'next/head';

export default class Index extends React.Component {
  socketConnect(data) {
    console.log(data);
  }

  render() {
    return (
      <div>
        <Head>
          <title>My page title</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <script src="https://cdn.socket.io/socket.io-1.4.5.js"></script>
          <script>
            const socket = io.connect('http://localhost:3030');
            socket.on('hello', {this.socketConnect});
          </script>
        </Head>
        Welcome to next.js!!!
      </div>
    );
  }
}
