import formly from 'angular-formly';
import formlyBootstrap from 'angular-formly-templates-bootstrap'; 
import ContactFormController from './contact-form.controller'; 
import routing from './contact-form.config';

angular.module('ContactForm', 
    ['formly', 'formlyBootstrap'])
    .controller('ContactFormController', ContactFormController)
    .config(routing)
    .name; 