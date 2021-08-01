const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({ origin: 'http://localhost:8080' }));

app.use('/build/dist', express.static('./build/dist'));

app.listen(7300, () => console.log('Server listening on port 7300'));
