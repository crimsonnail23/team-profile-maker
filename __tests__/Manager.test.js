const Manager = require('../lib/Manager.js'); 

test('checks to see if Manager inherited properties from Employee', ()=>{
    const manager = new Manager('Joel',2,'joel@email.com');
    
    expect(manager.name).toBe('Joel');
    expect(manager.id).toEqual(2);
    expect(manager.email).toBe('joel@email.com')
});

test('checks to see if getName method works',()=>{
    const manager = new Manager('Joel',2,'joel@email.com');

    expect(manager.getName).toBe('Joel');
});

test('checks to see if getId method works',()=>{
    const manager = new Manager('Joel',2,'joel@email.com');
    
    expect(manager.getId).toEqual(2);
});

test('checks to see if getEmail method works', ()=>{
    const manager = new Manager('Joel',2,'joel@email.com');

    expect(manager.getEmail).toBe('joel@email.com');
})

test('checks to see if officeNumber method works',()=>{
    const manager = new Manager('Joel',2,'joel@email.com');

    expect(manager.officeNumber()).toEqual(expect.any(Number));
})

test('checks to see if getRole method works', ()=>{
    const manager = new Manager('Joel',2,'joel@email.com');

    expect(manager.getRole()).toBe('Manager');
})