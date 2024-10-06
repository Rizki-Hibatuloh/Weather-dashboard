const express = require('express');
const bodyParser = require('body-parser')

const ENV = process.env.NODE_ENV;
const port = process.env.PORT  || 5000;

const  app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.listen(PORT, ()=> {
    console.log(`Server running at http://localhost:${PORT}`);
})

module.exports = app;
