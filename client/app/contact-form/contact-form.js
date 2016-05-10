import formly from 'angular-formly';
import formlyBootstrap from 'angular-formly-templates-bootstrap'; 
import contactForm from './contact-form.directive';

angular.module('ContactForm', 
    ['formly', 'formlyBootstrap'])
    .directive('contactForm', contactForm)
    .name; 