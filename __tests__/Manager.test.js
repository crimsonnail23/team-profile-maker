const Manager = require('../lib/Manager.js'); 

test('checks to see if Manager inherited properties from Employee and if all methods work', ()=>{
    const manager = new Manager('Joel',2,'joel@email.com', 821);
    
    expect(manager.name).toBe('Joel');
    expect(manager.id).toEqual(2);
    expect(manager.email).toBe('joel@email.com')
    expect(manager.officeNumber).toEqual(821);
    expect(manager.getName()).toBe('Joel');
    expect(manager.getId()).toEqual(2);
    expect(manager.getEmail()).toBe('joel@email.com');
    expect(manager.getOfficeNumber()).toEqual(821);
    expect(manager.getRole()).toBe('Manager');
    
});

