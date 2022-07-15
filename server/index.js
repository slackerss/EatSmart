const path = require('path');
const express = require('express');

const port = 8000;

const distPath = path.resolve(__dirname, '..', 'dist');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(distPath));

app.get('/', (req, res) => {
  console.log('this is get');
});

app.listen(port, () => {
  console.log(`listening @ http://127.0.0.1:${port}`);
});
