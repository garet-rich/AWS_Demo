const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Express myself! Total tutorial completion.'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
