const path = require('path');
const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.sendFile(path.resolve(__dirname, '../docs/index.html'));
});

app.get('/:html', (request, response) => {
  response.sendFile(path.resolve(__dirname, '../docs/' + request.params.html));
});

app.get('/imgs/:img', (request, response) => {
  response.sendFile(path.resolve(__dirname, '../docs/imgs/' + request.params.img));
});

require('http')
  .createServer(app)
  .listen(5000, (error) => {
    if (error) {
      console.log(error);
      return;
    }

    console.info('==> Listening at http://localhost:5000');
  }
);

