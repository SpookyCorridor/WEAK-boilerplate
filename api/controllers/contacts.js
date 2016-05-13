'use strict'; 

const Contact = require('../models/contact'); 
const _ = require('underscore'); 
const uuid = require('node-uuid'); 

module.exports.findAll = function(req, res) {
    res.json(req.session.contacts); 
};

module.exports.create = function(req, res) {
    
    console.log('creating');
    Contact.validateContact(req.body)
        .then(function(result){
            result._id = uuid.v1();
            
            if (!req.session.contacts) {
                req.session.contacts = [];
            }
            
            req.session.contacts.push(result);
             
            res.json(result); 
            
        })
        .catch(function(err){
            console.log(err); 
            res.send(err); 
        }); 
   
};

module.exports.findById = function(req, res) {
        const match = _.findWhere(req.session.contacts, {_id: req.params.id });
        if(!match) {
            res.send('no matches'); 
        }
        
        res.json(match);
};


module.exports.editById = function(req, res) {
    
    const match = _.findWhere(req.session.contacts, {_id: req.body._id });
    if (!match) {
        res.send('no matches'); 
    }
    Contact.findAndReplace(req.session.contacts, req.body._id, req.body);
     
    res.json('done'); 
};

module.exports.removeContact = function(req, res) {
    
   let deleted = false; 
   const contact = req.body._id; 
   const contactsLength = req.session.contacts.length;
  
   for(let i = 0; i < contactsLength; i++) {
        if(req.session.contacts[i]._id === contact) {
          req.session.contacts.splice(i, 1);
          deleted = true; 
          break;
        }
    }
    
    if (!deleted) {
        res.send('contact not found'); 
    } else {
        res.json('item deleted');
    } 
}; 