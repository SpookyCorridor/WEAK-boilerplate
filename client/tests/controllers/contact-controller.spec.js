import Milton from './../../app/app'; 
describe('Contact controller', () => {
    let controller; 
    let service;
    let promise; 
    let scope; 
    
    let m_contactResourceSrvc;  
    
    beforeEach(()=> {

       m_contactResourceSrvc = {}; 
        
       angular.mock.module(Milton, ($provide) =>{
            $provide.value('contactResourceService', m_contactResourceSrvc);
        });
        
       angular.mock.inject(($controller, contactResourceService, $q, $rootScope) => {
             
           promise = () => {
                let defer = $q.defer();
                defer.resolve({});
                return defer.promise; 
            };
            
           /**
             * contactResourceService methods 
             */ 
            
           m_contactResourceSrvc.findAllContacts = jasmine.createSpy('findAllContacts')
            .and.callFake(promise);
            
            m_contactResourceSrvc.addContact = jasmine.createSpy('addContact')
            .and.callFake(promise); 
            
            m_contactResourceSrvc.setCurrent = jasmine.createSpy('setCurrent')
            .and.callFake(promise); 
            
            m_contactResourceSrvc.deleteContact = jasmine.createSpy('deleteContact')
            .and.callFake(promise); 
            
            /**
             * angular injections 
             */
            
           service = contactResourceService; 
           controller = $controller('contactController', {});
           scope = $rootScope.$new(); 
           
        });
    });
        
        it('should try and gather all contacts in session', () => {
           expect(service.findAllContacts).toHaveBeenCalled(); 
        });
        
        it('should add a contact on submit', () => {
           controller.onSubmit();
           expect(service.addContact).toHaveBeenCalledWith(controller.model);  
        });
        
        it('should update contacts', () => {
            controller.update(1);
            expect(service.setCurrent).toHaveBeenCalledWith(1); 
        });
        
        it('should delete contacts', () => {
            controller.delete(1);
            expect(service.deleteContact).toHaveBeenCalledWith(1); 
        });
        
        it('should gather contacts after a deletion', () => {
           spyOn(controller, 'init');
           controller.delete(1);
           scope.$digest(); 
           expect(controller.init).toHaveBeenCalled();  
        });
    });

