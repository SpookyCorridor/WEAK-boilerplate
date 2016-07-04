import angular from 'angular'; 
import uiRouter from 'angular-ui-router';
import ngRoute from 'angular-route';

import Contact from './contact'; 
import ContactForm from './contact-form'; 
import Config from './config'; 

import angularFormly from 'angular-formly';
import angularFormlyTemplatesBoootstrap from 'angular-formly-templates-bootstrap';

import confirmClick from './directives/confirm-click'; 

import Directives from './directives'; 

import 'bootstrap/dist/css/bootstrap.css';
import './../assets/main.scss'; 

export default angular.module('Milton', [
    Contact,
    ContactForm,
    Directives,
    angularFormly,
    angularFormlyTemplatesBoootstrap
])
.config(Config)
.name; 