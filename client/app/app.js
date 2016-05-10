import angular from 'angular'; 
import uiRouter from 'angular-ui-router';
import ContactForm from './contact-form/contact-form'; 
import 'bootstrap/dist/css/bootstrap.css'; 

angular.module('Milton', [
    uiRouter, 
    'ContactForm'
]); 

