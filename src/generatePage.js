

module.exports = (teamData)=>{
    console.log('ln 4' , teamData)
    const [Manager,Intern,Engineer]=teamData
    console.log(Manager);
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset ="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="./src/style.css">
    </head>
    <body>
        <header>
            <h1> My Team </h1>
        </header>
        <div class="manager-info">
            <p class="manager-name">${Manager.name}</p>
            <p class="manager-id>${Manager.id}</p>
            <a href="mailto: ${Manager.email}"> Send E-Mail</a>
            <p class="manager-id"></p>
        </div>
        <div class="engineer-info">
            <p class="engineer-name">${Engineer.name}</p> 
            <p class="engineer-id">${Engineer.engineerId}</p>
            <a class="engineer-email href="mailto: ${Engineer.engineerName}"></a>
            <p class="github-username">www.github.com/${Engineer.username}</p>
        </div>
        <div class="intern-info">
            <p class="intern-name>${Intern.internName}</p>
            <p class="intern-id">${Intern.internId}</p>
            <p class="intern-email">${Intern.internEmail}</p>
            <p class="intern-school">${Intern.school}</p>
        </div>
    `
}