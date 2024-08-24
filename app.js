
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const app = express();
const expressLayouts = require('express-ejs-layouts');


app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
const PORT = 3000;
// ejs config
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(expressLayouts);
app.set('layout', 'layout');
// add website routes
app.use('/', require('./routes/website'))

// add api routes
app.use('/api', require('./routes/api'))

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
});