const Employee = require('../src/Employee.js');

test('creates an employee class',()=>{
    const employee = new Employee('Jennifer', 1, 'jenny@email.com', 'Employee')

    expect(employee.name).toBe('Jennifer');
    expect(employee.id).toEqual(1);
    expect(employee.email).toBe('jenny@email.com');
    expect(employee.role).toBe('Employee');
})