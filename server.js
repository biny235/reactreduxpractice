const express = require('express');
const app = express();
const path = require('path');
const db = require('./db');
const { User } = db.models;

db.syncAndSeed().then(() => console.log('seeded'));

app.use('/', express.static(path.join(__dirname, 'public')));
app.get('/', (req, res, next) =>
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
);

app.get('/api/users', (req, res, next) => {
  User.findAll()
    .then(users => res.send(users))
    .catch(next);
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(port));
