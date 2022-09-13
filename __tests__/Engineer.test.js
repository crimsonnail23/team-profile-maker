const Engineer = require('../lib/Engineer.js');

test('checks to see if Engineer inherited properties from Employee',()=>{
    const engineer = new Engineer ('Maria', 3, 'maria@email.com');

    expect(engineer.name).toBe('Maria');
    expect(engineer.id).toEqual(3);
    expect(engineer.email).toBe('maria@email.com');
});