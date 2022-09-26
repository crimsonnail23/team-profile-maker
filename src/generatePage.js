// createManager function, createEngineer function, and createIntern function will be created if the user answers questions about them.
// they pull information from the user inputs by using the methods defined in their class.

function createManager(manager){
    return `
    <div class="manager-info">
    <p>Manager</p>
    <p class="manager-name">name: ${manager.getName()}</p>
    <p class="manager-id"> ID:${manager.getId()}</p>
    <a href='mailto: ${manager.getEmail()}'> Send E-Mail</a>
    <p class="manager-officeNumber">Office Number:${manager.getOfficeNumber()}</p>
    </div>`
}

function createEngineer(engineer){
    return`
    <div class="engineer-info">
            <p>Engineer</p>
            <p class="engineer-name">name:${engineer.getName()}</p> 
            <p class="engineer-id">ID:${engineer.getId()}</p>
            <a class="engineer-email" href="mailto: ${engineer.getEmail()}">send email</a>
            <br>
            <br>
            <a href="https://www.github.com/${engineer.getGithub()}">GitHub Profile</a>
        </div>`
}

function createIntern(intern){
    return`
    <div class="intern-info">
    <p>Intern</p>
    <p class="intern-name">Name: ${intern.getName()}</p>
    <p class="intern-id">ID: ${intern.getId()}</p>
    <a class="intern-email"href="mailto: ${intern.getEmail()}">send email</a>
    <p class="intern-school">school:${intern.getSchool()}</p>
</div>`
}

//this will first filter the team by their role, and then loop through that role as many times as needed, and then add it to the HTML literal.
function insertCards(team){
    const html = [];
    html.push(team.filter(employee =>employee.getRole()==='Manager').map(manager=>createManager(manager)));
    html.push(team.filter(employee=>employee.getRole()==='Engineer').map(engineer=>createEngineer(engineer)).join(''));
    html.push(team.filter(employee=>employee.getRole()==='Intern').map(intern=>createIntern(intern)).join(''));
    console.log(html);
    return html.join('')
}


// following is an HTML literal that will have the basic HTML that will be used to generate the HTML file.
module.exports = (teamData)=>{
    // console.log('ln 4' , teamData)
    // const [Manager,Intern,Engineer]=teamData
    // console.log(Manager);
    // console.log(Intern);
    // console.log(Engineer);
    // console.log('ln 9 ' ,Engineer.getName());
    // console.log('ln 10', Engineer.getGihub());
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset ="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="../src/style.css">
    </head>
    <body>
        <header>
            <h1> My Team </h1>
        </header>
        <section class="employee">
        ${insertCards(teamData)}
        </section>
    </body>
    </html>
    `
}