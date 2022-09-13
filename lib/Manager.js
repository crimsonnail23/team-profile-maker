const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name,id,email){
        //following code should inherit name, id, and email properties from Employee.
        super(name,id,email)
    };
    getName(){
        return this.name;
    };
    getId(){
        return this.id;
    };
    getEmail(){
        return this.email;
    };
    getRole(){
        return 'Manager'
    }
};

module.exports = Manager;