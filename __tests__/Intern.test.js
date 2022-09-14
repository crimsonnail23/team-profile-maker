const Intern = require('../lib/Intern.js')

test('checks to see if Engineer inherited properties from Employee',()=>{
    const intern = new Intern ('Larry', 4, 'larry@email.com', 'Montclair State');

    expect(intern.name).toBe('Larry');
    expect(intern.id).toEqual(4);
    expect(intern.email).toBe('larry@email.com');
    expect(intern.school).toBe('Montclair State');
    expect(intern.getSchool()).toBe('Montclair State');
    expect(intern.getRole()).toBe('intern');
});
