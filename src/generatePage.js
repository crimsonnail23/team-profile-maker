function createManager(manager){
    return `
    <div class="manager-info">
    <p class="manager-name">name: ${manager.getName()}</p>
    <p class="manager-id"> ID:${manager.getId()}</p>
    <a href='mailto: ${manager.getEmail()}'> Send E-Mail</a>
    <p class="manager-officeNumber">Office Number:${manager.getOfficeNumber()}</p>
    </div>`
}

function createEngineer(engineer){
    return`
    <div class="engineer-info">
            <p class="engineer-name">name:${engineer.getName()}</p> 
            <p class="engineer-id">ID:${engineer.getId()}</p>
            <a class="engineer-email" href="mailto: ${engineer.getEmail()}"></a>
            <p class="github-username">www.github.com/${engineer.getGithub()}</p>
        </div>`
}

function createIntern(intern){
    return`
    <div class="intern-info">
    <p class="intern-name">${intern.getName()}</p>
    <p class="intern-id">${intern.getId()}</p>
    <p class="intern-email">${intern.getEmail()}</p>
    <p class="intern-school">school:${intern.getSchool()}</p>
</div>`
}

function insertCards(team){
    const html = [];
    html.push(team.filter(employee =>employee.getRole()==='Manager').map(manager=>createManager(manager)));
    html.push(team.filter(employee=>employee.getRole()==='Engineer').map(engineer=>createEngineer(engineer)).join(''));
    html.push(team.filter(employee=>employee.getRole()==='Intern').map(intern=>createIntern(intern)).join(''));
    console.log(html);
    return html.join('')
}

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
        ${insertCards(teamData)}
        
    </body>
    </html>
    `
}