const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const apiRoutes = express.Router();
app.use('/api', apiRoutes);

const playlistRouter = require('./routes/playlistRouter');
apiRoutes.use('/playlists', playlistRouter);

module.exports = app;
