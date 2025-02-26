//const http = require('http'); // import module

fs = require('fs');

var express = require('express');
const mustache = require('mustache-express');// import handlebar template module
const { defaultMaxListeners } = require('events');
const path = require('path');
const public = path.join(__dirname,'/public');
const router = require('./routes/ttRoutes'); 
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

var app = express();

// connect to Mongo DB
const dbURI = 'mongodb+srv://Darren:Erictheking7@cluster0.t0ch9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(dbURI)
.then((result) => console.log('connected to db'))
.catch((err) => console.log(err));


app.use(express.static(public));
app.use(bodyParser.urlencoded({extended:false}));
app.set('port', process.env.PORT || 3000);
app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.use('/', router);






app.listen(app.get('port'), function() {
    console.log( 'Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.')
})








