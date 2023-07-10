const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.send('This is about page');
});

app.get('/about/:name', (req, res) => {
  const name = req.params.name;

  res.send(`Hello my name ${name}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
