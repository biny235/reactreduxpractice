const express = require('express');
const app = express();
const path = require('path');
const db = require('./db');

db.syncAndSeed()
  .then(()=> console.log('seeded'))

app.use('/', express.static(path.join(__dirname, 'public')));
app.get('/', (req, res, next)=> res.sendFile(path.join(__dirname, 'public', 'index.html')));


const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(port))