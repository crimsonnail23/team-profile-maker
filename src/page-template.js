

module.exports = generateSite =>{
    const { } = generateSite;
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
            <p class="manager-name">${manager.name}</p>
            <p class="manager-id>${manager.id}</p>
            <a href="mailto: ${manager.email}"> Send E-Mail</a>
            <p class="manager-id"></p>
        </div>
        <div class="engineer-info">
            <p class="engineer-name">${engineer.engineerName}</p>
            <p class="engineer-id">${engineer.engineerId}</p>
            <a class="engineer-email href="mailto: ${engineer.engineerName}"></a>
            <p class="github-username">www.github.com/${engineer.username}</p>
        </div>
        <div class="intern-info">
            <p class="intern-name>${intern.internName}</p>
            <p class="intern-id">${intern.internId}</p>
            <p class="intern-email">${intern.internEmail}</p>
            <p class="intern-school">${intern.school}</p>
        </div>
    `
}