class ContactController {
    constructor($scope, contactResourceService, $stateParams) {
        
        this.contactResourceService = contactResourceService; 
        
        this.contacts = []; 
        
        $scope.$watch(() => this.contacts, function (newVal) {
            console.log('Name changed to ' + JSON.stringify(newVal));
        });
        
        this.model = {
        }; 
        
        this.fields = [
            {
                type: 'input',
                key: 'id',
                templateOptions: {
                    type: 'text',
                    label: 'Contact id',
                    placeholder: 'Enter an id like "family or "friend"',
                    required: true
                }
            },
            {
                type: 'input',
                key: 'name',
                templateOptions: {
                    type: 'text',
                    label: 'Contact name',
                    placeholder: 'Enter contact name',
                    required: true
                }
            },
            {
                type: 'input',
                key: 'address',
                templateOptions: {
                    type: 'text',
                    label: 'Contact address',
                    placeholder: 'Enter contact address',
                    required: true 
                }
            },
            {
                type: 'input',
                key: 'age',
                templateOptions: {
                    type: 'number',
                    label: 'Contact age',
                    placeholder: 'Enter contact age',
                    required: true 
                }
            }
            
        ];
        
        this.init(); 
    }
    
    onSubmit () {
          this.contactResourceService.addContact(this.model)
            
            .then((result) =>  {
                this.contacts.push(result.data);     
            })
            .catch((err) => {
                console.log(err); 
            });
    }
    
    init() {
       this.contactResourceService.findAllContacts()
            .then((result) => {
               this.contacts = result.data || [];    
            });
    }
    
    update(id){
        this.contactResourceService.setCurrent(id); 
    }
    
    delete(params){
        this.contactResourceService.deleteContact(params)
            .then((result) => {
                this.init(); 
            }); 
    }
}

ContactController.$inject = ['$scope', 'contactResourceService', '$stateParams']; 

export default ContactController; 