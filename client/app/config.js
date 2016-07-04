routing.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routing($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/contacts');
    
    $stateProvider
        .state('contacts', {
            url: '/contacts', 
            template: require('./contact/contact.html'),
            controller: 'contactController',
            controllerAs: 'vm'
         })
        .state('contact', {
            url: '/contact/:id',
            template: require('./contact-form/contact-form.html'),
            controller: 'contactFormController',
            controllerAs: 'vm'
        }); 
}; 