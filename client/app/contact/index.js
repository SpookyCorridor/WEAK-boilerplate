import uiRouter from 'angular-ui-router';
import ngRoute from 'angular-route';

import ContactController from './contact.controller';
import ContactResourceService from './contact-resource.service';
import ConfirmClick from '../directives/confirm-click'; 

export default angular.module('Contact', [
    uiRouter,
    ngRoute
])
    .controller('contactController', ContactController)
    .service('contactResourceService', ContactResourceService)
    .directive('confirmClick', ConfirmClick)
    .name; 