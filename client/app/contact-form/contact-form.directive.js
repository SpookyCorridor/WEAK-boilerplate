function contactForm() {
    return {
        restrict: 'E',
        scope: {},
        template: require('./contact-form.html'),
        controller: ContactFormController,
        controllerAs: 'vm'
    };
}

class ContactFormController {
    constructor(contactResourceService){
        this.contactResourceService = contactResourceService; 
        this.model = {}; 
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
    }
    
    onSubmit () {
        console.log(this.model)
          this.contactResourceService.addContact(this.model)
            
            .then((result) => {
               console.log(result);          
            })
            .catch((err) => {
                console.log(err); 
            });
    }
}

ContactFormController.$inject = ['contactResourceService']; 
export default contactForm; 