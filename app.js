const express = require('express');
const router = express.Router();
const config = require('./config/config');;

const app = express();

module.exports = require('./config/express')(app, config);

app.listen(config.port, () => {
  console.log('Express server listening on port ' + config.port);
});

app.get('/index', (req, res) => {
  res.render('home');
 });

