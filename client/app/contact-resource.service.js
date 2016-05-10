class ContactResourceService {
    constructor($http){
         this.$http = $http; 
    }
    
    findAllContacts() {
        const req = {
            method: 'GET',
            url: "http://localhost:3000/api/contacts"
        };
        
        return this.$http(req);  
    }
    
   addContact(params) {
       const req = {
           method: 'POST',
           url: "http://localhost:3000/api/contacts",
           data: params
       };
       
       return this.$http(req); 
   }
}

ContactResourceService.$inject = ['$http']; 

export default ContactResourceService; 