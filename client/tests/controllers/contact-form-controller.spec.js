import Milton from './../../app/app'; 

describe('ContactForm controller', () => {
    let controller; 
    let service;
    let state; 
    let scope; 
    
    let m_contactResourceSrvc;
    let fakeModel; 
    let promise;   
    
    beforeEach(()=> {

       m_contactResourceSrvc = {}; 
       
       fakeModel = {
           _id: 111,
            id: 'faker',
            name: 'Sir Fakes-a-lot',
            address: 'Hogwarts',
            age: '200'
       }; 
        
       angular.mock.module(Milton, ($provide) =>{
            $provide.value('contactResourceService', m_contactResourceSrvc);
        });
        
       angular.mock.inject(($controller, contactResourceService, $q, _$state_, $rootScope) => {
           
            promise = () => {
                let defer = $q.defer();
                defer.resolve({});
                return defer.promise; 
            };
            
            /**
             * contactResourceService methods 
             */
            
            m_contactResourceSrvc.updateContact = jasmine.createSpy('updateContact')
                .and.callFake(promise); 
            
            m_contactResourceSrvc.getCurrent = jasmine.createSpy('setCurrent')
                .and.returnValue(fakeModel); 
            
            /**
             * angular injections 
             */
            
           service = contactResourceService; 
           controller = $controller('contactFormController', {});
           state = _$state_;  
           scope = $rootScope.$new();  
           
        });
    });
        
        it('should find the contact being updated', () => {
           expect(service.getCurrent).toHaveBeenCalled(); 
        });
        
        it('should know the current contact initially', () => {
            expect(controller.model).toEqual(fakeModel); 
        }); 
        
        it('should be able to update a contact', () => {
            controller.onSubmit(controller.model); 
            expect(service.updateContact).toHaveBeenCalledWith(fakeModel);
        });
        
        it('should change state after updating contact', () => { 
            controller.onSubmit(controller.model); 
            scope.$digest(); 
            expect(state.current.name).toBe('contacts'); 
        });
    });

