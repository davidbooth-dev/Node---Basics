
var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');

var router = express.Router();

// --> 7)  Mount the Logger middleware here

/*let logger = require('./functions.js').logger;
app.use((req, res, next) => {
  next();
}, (req, res) => {
  logger(req, res);
});*/
 
// --> 11)  Mount the body-parser middleware  here
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/** 1) Meet the node console. */
//console.log("Hello World");

/** 2) A first working Express Server */

/*app.get("/", (req, res) => {
  res.send("Hello Express");
})*/

/** 3) Serve an HTML file */

/*app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
})*/

/** 4) Serve static assets  */

app.use(express.static(__dirname + '/public'));

/** 5) serve JSON on a specific route */

/*app.get('/json', (req, res) => {
  const json = {
    "message": "Hello json"
  }
  res.json(json);
})*/

/** 6) Use the .env file to configure the app */
 
/*app.get('/json', (req, res) => {
  let json = {
    "message": "Hello json"
  }
  let uc = (process.env.MESSAGE_STYLE === 'uppercase');
  if(uc){
    let m = json.message.toUpperCase();
    json.message = m;
    
    res.json(json);
  }
  else{
    res.json(json);
  }
})*/
 
/** 7) Root-level Middleware - A logger */
//  place it before all the routes !


/** 8) Chaining middleware. A Time server */

let time = require('./functions').time;

app.get('/now', (req, res, next) => {
  req.time = time();
  next();
}, function(req, res){
  let json = req.time
  res.json(json);
});

/** 9)  Get input from client - Route parameters */
/*app.get('/:word/:echo', (req, res, next) => {
  req.word = req.params.word;
  next();
}, (req, res) => {
  let json = { echo: req.word, echo: req.word}
  res.json(json);
})*/

/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>
/*app.get('/name', (req, res) => {
  let first = req.query.first;
  let last = req.query.last;

  let json = { name: `${first} ${last}`};
  
  res.json(json);
})*/
  
/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !


/** 12) Get data form POST  */

/*app.post('/name', (req, res) => {
  let first = req.body.first;
  let last = req.body.last;
  let json = { name: `${first} ${last}`};
  
  res.json(json);
})*/
    
// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;
