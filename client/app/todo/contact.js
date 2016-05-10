import angular from 'angular';
import ContactDirective from './contact.directive.js'; 

angular.module('contact', [])
    .directive('contact', ContactDirective);
    
export default 'contact'; 