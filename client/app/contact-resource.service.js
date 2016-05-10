class ContactResourceService {
    constructor($http){
         this.$http = $http;
         this.currentContact = {};  
    }
    
    findAllContacts() {
        const req = {
            method: 'GET',
            url: "http://localhost:3000/api/contacts"
        };
        console.log('sending');
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
   
   updateContact(params) {
       const req = {
         method: 'PUT',
         url: "http://localhost:3000/api/contact/" + params._id,
         data: params   
       };
       
       return this.$http(req); 
   }
   
   deleteContact(params) {
       console.log('deleting' + JSON.stringify(params)); 
       const req = {
           method: 'DELETE',
           url: "http://localhost:3000/api/contact/" + params._id,
           data: params,
           headers: {"Content-Type": "application/json;charset=utf-8"}
       };
       
       return this.$http(req); 
   }
   
   setCurrent(contact) {
       this.currentContact = contact; 
       console.log(this.currentContact + ' yes'); 
   }
   
   getCurrent() {
       return this.currentContact; 
   }
}

ContactResourceService.$inject = ['$http']; 

export default ContactResourceService; 