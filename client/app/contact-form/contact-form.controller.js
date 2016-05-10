class ContactFormController {
    constructor(){
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
        console.log(this.model); 
    }
}

export default ContactFormController; 

