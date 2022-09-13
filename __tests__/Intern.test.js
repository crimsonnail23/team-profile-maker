const Intern = require('../lib/Intern.js')

test('checks to see if Engineer inherited properties from Employee',()=>{
    const intern = new Intern ('Larry', 4, 'larry@email.com');

    expect(intern.name).toBe('Larry');
    expect(intern.id).toEqual(4);
    expect(intern.email).toBe('larry@email.com');
});
test('checks if school propery was sueccesfully added',()=>{
    const intern = new Intern ('Larry', 4, 'larry@email.com', 'Montclair State');

    expect(intern.school).toBe('Montclair State')
});
test('checks if getSchool method works.',()=>{
    const intern = new Intern ('Larry', 4, 'larry@email.com', 'Montclair State');

    expect(intern.getSchool()).toBe('Montclair State');
});

test('checks if getRole method works',()=>{
    const intern = new Intern ('Larry', 4, 'larry@email.com', 'Montclair State');

    expect(intern.getRole()).toBe('intern');
})