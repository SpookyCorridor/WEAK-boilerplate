class ContactController {
    constructor($state, contactResourceService, $stateParams) {
        
        this.contactResourceService = contactResourceService; 
        this.state = $state; 
        this.model = {
        }; 
        
        this.fields = [
            {
                type: 'input',
                key: 'id',
                templateOptions: {
                    type: 'text',
                    label: 'Contact id',
                    placeholder: 'Enter an id like "family" or "friend"',
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
         this.contactResourceService.updateContact(this.model)
            .then((result) =>  {
                this.state.go('contacts');   
            })
            .catch((err) => {
                console.log(err); 
            }); 
    }
    
    init () {
        this.current = this.contactResourceService.getCurrent(); 
        this.model = {
            _id: this.current._id, 
            id: this.current.id,
            name: this.current.name,
            address: this.current.address,
            age: this.current.age
        }; 
    }
}

ContactController.$inject = ['$state', 'contactResourceService', '$stateParams']; 

export default ContactController; 