import angular from 'angular'; 
import uiRouter from 'angular-ui-router';
import ngRoute from 'angular-route';

import angularFormly from 'angular-formly';
import angularFormlyTemplatesBoootstrap from 'angular-formly-templates-bootstrap';

import contactResourceService from './contact/contact-resource.service'; 
import ContactController from './contact/contact.controller'; 
import ContactFormController from './contact/contact-form/contact-form.controller';
import confirmClick from './directives/confirm-click'; 
import routing from './contact/contact.config';  

import 'bootstrap/dist/css/bootstrap.css';
import '../assets/main.scss'; 

export default angular.module('Milton', [
    uiRouter,
    ngRoute, 
    angularFormly,
    angularFormlyTemplatesBoootstrap
]).controller('ContactController', ContactController)
  .controller('ContactFormController', ContactFormController)
  .service('contactResourceService', contactResourceService)
  .directive('ngConfirmClick', confirmClick)
  .config(routing)
  .name; 