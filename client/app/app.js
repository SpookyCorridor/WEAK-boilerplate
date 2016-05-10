import angular from 'angular'; 
import uiRouter from 'angular-ui-router';
import ContactList from './contact-list/contact-list'; 
import ContactForm from './contact-form/contact-form'; 
import routing from './contact.config';  
import 'bootstrap/dist/css/bootstrap.css';

angular.module('Milton', [
    uiRouter, 
    'ContactList',
    'ContactForm'
]).config(routing); 