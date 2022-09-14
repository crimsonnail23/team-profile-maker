const Engineer = require('../lib/Engineer.js');

test('checks to see if Engineer class has all the propeties and all methods work.',()=>{
    const engineer = new Engineer ('Maria', 3, 'maria@email.com', 'mariaGitHub');

    expect(engineer.name).toBe('Maria');
    expect(engineer.id).toEqual(3);
    expect(engineer.email).toBe('maria@email.com');
    expect(engineer.github).toBe('mariaGitHub');
    expect(engineer.getGithub()).toBe('mariaGitHub');
    expect(engineer.getRole()).toBe('Engineer');
});
