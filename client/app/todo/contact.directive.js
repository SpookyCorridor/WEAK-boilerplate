export default class ContactDirective {
    constructor() {
        this.template = require('./contact.html');
        this.restrict = 'E';
        this.scope = {};
        
        this.controller = ContactDirectiveController;
        this.controllerAs = 'ctrl';
        this.bindToController = true; 
    }
    
    compile() {
        
    }
}