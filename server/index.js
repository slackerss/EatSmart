const path = require('path');
const express = require('express');
const http = require('http');
const { Users } = require('./db/index.js');


const port = 8000;

const distPath = path.resolve(__dirname, '..', 'dist');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(distPath));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'dist', 'index.html'), (data, err) => { 
    console.log(`I'm getting stuff`);
    if(err){
      res.status(500).send(err);
    } 
    
   })
});

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`listening @ http://127.0.0.1:${port}`);
});
