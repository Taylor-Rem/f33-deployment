const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(`${__dirname}/public`));

// app.get('/', (req, res) =>
//   res.sendFile(path.join(__dirname, './public/index.html'))
// );

app.listen(4000, () => console.log('up on 4000'));
