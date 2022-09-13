const Employee = require('../lib/Employee.js');

test('creates an employee class with some properties',()=>{
    const employee = new Employee('Jennifer', 1, 'jenny@email.com');

    expect(employee.name).toBe('Jennifer');
    expect(employee.id).toEqual(1);
    expect(employee.email).toBe('jenny@email.com');
});

test('checks to see if getName method works.',()=>{
    const employee = new Employee('Jennifer', 1, 'jenny@email.com');
    
    expect(employee.getName()).toBe('Jennifer');
});

test('checks to see if getId method works.',()=>{
    const employee = new Employee('Jennifer', 1, 'jenny@email.com');

    expect(employee.getId()).toBe(1);
});

test('chceks to see if getEmail method works', ()=>{
    const employee = new Employee('Jennifer', 1, 'jenny@email.com');

    expect(employee.getEmail()).toBe('jenny@email.com')
});

test('checks to see if getRole method works.',()=>{
    const employee = new Employee('Jennifer', 1, 'jenny@email.com');

    expect(employee.getRole()).toBe('Employee');
})