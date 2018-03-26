const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

const app = express();

app.get('/', (req, res) => {
  res.render("home.ejs");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
