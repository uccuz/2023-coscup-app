const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  //res.render('index', { title: '2023 COSCUP Demo Failed!!' });
  res.render('index', { title: '2023 COSCUP Demo Succeeded!!' });
});

app.listen(8080, () => {
  console.log('Server started on port 8080');
});