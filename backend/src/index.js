const express = require('express');
const cors = require('cors');
const app = express();

const routes = require('./routes');

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || '4001';

app.use(cors())
app.use(express.json())
app.use(routes);

app.listen(port, () => {
  console.log(`Running on http://${host}:${port}`)
});
