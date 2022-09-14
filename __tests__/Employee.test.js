const Employee = require('../lib/Employee.js');

test('creates an employee class with some properties',()=>{
    const employee = new Employee('Jennifer', 1, 'jenny@email.com');

    expect(employee.name).toBe('Jennifer');
    expect(employee.id).toEqual(1);
    expect(employee.email).toBe('jenny@email.com');
    expect(employee.getName()).toBe('Jennifer');
    expect(employee.getId()).toBe(1);
    expect(employee.getEmail()).toBe('jenny@email.com');
    expect(employee.getRole()).toBe('Employee');
});