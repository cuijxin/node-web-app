'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res)=> {
  res.send('Hello Rancher World');
});
app.get('/ping', (req, res)=> {
  res.send('pong');
});

app.get('/hi', (req, res)=> {
  res.send("Hello, there");
});

app.get('/g', (req, res)=> {
  res.send("gggggg");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
