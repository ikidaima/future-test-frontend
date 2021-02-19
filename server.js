const { request, response } = require('express');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/dist'));

app.get('/', (request, response) => {
  const fileIndex = __dirname + '/dist/index.html';
  console.log(fileIndex);
  response.sendFile(fileIndex);
});

app.listen(port, err => {
  if (err) {
    return console.log('something bad happened', err);
  }

  console.log(`server is listening on ${port}`);
});