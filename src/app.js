const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const apiRoutes = express.Router();
app.use('/api', apiRoutes);

module.exports = app;
