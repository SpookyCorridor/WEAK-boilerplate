describe('Contact controller', () => {
    let controller;
    let MOCK_contactResourceSrvc; 
         
    beforeEach(function(){
        MOCK_contactResourceSrvc = jasmine
            .createSpyObj('contactResourceService', 
            ['findAllContacts', 'addContact', 'updateContact', 
            'deleteContact',  'setCurrent', 'getCurrent']);
        
        module('Milton', function($provide){
            $provide.value('contactResourceService', MOCK_contactResourceSrvc);
        });
        
        angular.mock.inject(function($injector) {
            controller = $injector.get('$controller')('ContactController');
        });  
    });  
    
    describe('init', () => {
        it('should try and gather all contacts in session ', () =>{
            expect(MOCK_contactResourceSrvc).toHaveBeenCalled(); 
        });
    });
}); 