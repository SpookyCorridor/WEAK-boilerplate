import ContactController from './contact.controller.js'; 
import ContactFormController from './contact-form.controller';
routing.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routing($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/contacts');
    
    $stateProvider
        .state('contacts', {
            url: '/contacts', 
            template: require('./contact.html'),
            controller: ContactController,
            controllerAs: 'vm'
         })
        .state('contact', {
            url: '/contact/:id',
            template: require('./contact-form.html'),
            controller: 'ContactFormController',
            controllerAs: 'vm'
        }); 
}; 

