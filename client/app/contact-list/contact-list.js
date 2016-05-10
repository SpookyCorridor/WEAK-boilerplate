import * as angular from 'angular'; 
import contactList from './contact-list.directive';
import ContactResourceService from './../contact-resource.service';

angular.module('ContactList', [])
    .directive('contactList', contactList)
    .service('contactResourceService', ContactResourceService)
    .name; 