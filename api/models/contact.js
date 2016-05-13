'use strict';
 
const _ = require('underscore'); 
const Promise = require('bluebird'); 
const session = require('express-session');

function isInteger(num) {; 
    return !isNaN(parseInt(num)); 
}

function sanitize(params) {
    
     const validParams = {
            id : params.id.toLocaleLowerCase(), 
            name : params.name.toLocaleLowerCase(), 
            address : params.address.toLocaleLowerCase(), 
            age : parseInt(params.age)
        };
     
     return validParams; 
}

exports.validateContact = function (params) {
    return new Promise(function(res, rej) {  
        
        for (let param in params) {
            if (!params.hasOwnProperty(param)) {
                rej('missing parameter'); 
            }
        }  
        
        if (!isInteger(params.age)) {
            rej('age must be an integer');    
        }; 
        
        const validParams = sanitize(params);  
            
        res(validParams);  
    });
};

exports.findAndReplace = function(object, value, replacevalue) {
  for (let x in object) {
    if (object.hasOwnProperty(x)) {
      if (typeof object[x] === 'object') {
        exports.findAndReplace(object[x], value, replacevalue);
      }
      if (object[x] === value) { 
         
        _.extend(object, replacevalue); 
         
        break; 
      }
    }
  }
}; 