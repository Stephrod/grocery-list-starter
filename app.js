const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/grocery-list-starter');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = 3000;
app.listen(port, () => console.log(`Listening on ${port}`));
