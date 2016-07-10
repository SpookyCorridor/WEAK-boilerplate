'use strict'; 

const express = require('express'); 
const app = express(); 
const router = express.Router(); 
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser'); 
const session = require('express-session'); 
const ContactCtrl = require('./api/controllers/contacts'); 

const port = process.env.PORT || 3000; 
    
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));
app.use(cookieParser()); 
app.use(session({resave: true, saveUninitialized: true, secret: 'shhhh', cookie: { maxAge: 60000 }}));
 
app.use(express.static(__dirname + '/build'));

router.route('/')
    .get(function(req, res) {
        res.send(File(__dirname + '/index.html'));
    }); 
   
app.use('/api', router); 
 
app.listen(port); 
console.log('server running on ' + port); 