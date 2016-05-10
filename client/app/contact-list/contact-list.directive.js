function contactList() {
    return {
        restrict: 'E',
        scope: {},
        template: require('./contact-list.html'),
        controller: ContactListController,
        controllerAs: 'vm' 
    };
}

class ContactListController {
    constructor(contactResourceService) {
        this.contactResourceService = contactResourceService; 
        this.contacts = {}; 
        this.init(); 
    }
    
    init() {
       this.contactResourceService.findAllContacts()
            .then((result) => {
               this.contacts = result.data;          
            });
    }
}

ContactListController.$inject = ['contactResourceService']; 
export default contactList; 