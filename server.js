'use strict'; 

var express = require('express'); 
var app = express(); 
var router = express.Router(); 
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser'); 
var session = require('express-session'); 
var ContactCtrl = require('./api/controllers/contacts'); 

var port = process.env.PORT || 3000; 
    
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));
app.use(cookieParser()); 
app.use(session({resave: true, saveUninitialized: true, secret: 'shhhh', cookie: { maxAge: 60000 }}));
 
app.use(express.static(__dirname + '/build'));

router.route('/')
    .get(function(req, res) {
        res.send(File(__dirname + '/index.html'));
    }); 
    
router.route('/contacts')
    .get(ContactCtrl.findAll)
    
    .post(ContactCtrl.create);
    
router.route('/contact/:id')
    .get(ContactCtrl.findById)
    
    .put(ContactCtrl.editById)
    
    .delete(ContactCtrl.removeContact); 
   
app.use('/api', router); 
 
app.listen(port); 
console.log('server running on ' + port); 