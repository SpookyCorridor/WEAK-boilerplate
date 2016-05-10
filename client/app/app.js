import angular from 'angular'; 
import uiRouter from 'angular-ui-router';
import contactResourceService from './contact-resource.service'; 
import ContactController from './contact.controller'; 
import ContactFormController from './contact-form.controller';
import confirmClick from './directives/confirm-click'; 
import routing from './contact.config';  
import 'bootstrap/dist/css/bootstrap.css';
import angularFormly from 'angular-formly';
import angularFormlyTemplatesBoootstrap from 'angular-formly-templates-bootstrap';
import ngRoute from 'angular-route';

angular.module('Milton', [
    uiRouter,
    ngRoute, 
    angularFormly,
    angularFormlyTemplatesBoootstrap
]).controller('ContactController', ContactController)
  .controller('ContactFormController', ContactFormController)
  .service('contactResourceService', contactResourceService)
  .directive('ngConfirmClick', confirmClick)
    .config(routing); 