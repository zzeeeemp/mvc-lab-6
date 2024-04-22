const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const errorRoutes = require('./routes/error');
const PORT = 3000;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  }));

app.use(bodyParser.urlencoded({ extended: true }));

app.use('*', errorRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

