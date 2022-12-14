const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name,id,email, officeNumber){
        //following code should inherit name, id, and email properties from Employee.
        super(name,id,email);

        this.officeNumber= officeNumber;
    };
    getOfficeNumber(){
        return this.officeNumber;
    };
    getRole(){
        return 'Manager'
    }
};

module.exports = Manager;