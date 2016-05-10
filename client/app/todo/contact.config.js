routing.$inject = ['$locationProvider', '$stateProvider']; 

export default function routing($locationProvider, $stateProvider) {
    $locationProvider.html5mode(true);
        
    $stateProvider.
        state('todo', {
            url: '/todo', 
            templateUrl: require('./todo.html')
        });
    
}