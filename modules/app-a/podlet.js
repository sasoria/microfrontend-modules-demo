const express = require('express');
const Podlet = require('@podium/podlet');
var cors = require('cors');

const podlet = new Podlet({
  name: 'podlet-a',
  version: '1.0.0',
  pathname: '/',
  content: '/',
  fallback: '/fallback',
  development: true,
});

const app = express();
app.use(cors({ origin: 'http://localhost:8080' }));

app.use('/build/dist', express.static('./build/dist'));

app.use(podlet.middleware());

podlet.css({ value: '/build/dist/index.css' });
podlet.js({ value: '/build/dist/index.js', type: 'module' });

app.listen(7100, () => console.log('Podlet listening on port 7100'));
