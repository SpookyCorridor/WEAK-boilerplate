routing.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routing($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/contacts');
    
    $stateProvider
        .state('contacts', {
            url: '/contacts',
            template: require('./contact.template.html')
        }); 
}; 