const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

const app = express();

app.get('/', (req, res) => {
  res.send("<h1>Welcome to Bunji</h1>");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
