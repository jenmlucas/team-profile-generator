const managerHtml = (manager) => {
    return `
        <div class= "col-md-4 mt-5 mb-4">
            <div class="card">
                <div id="cardHeaderManager" class="card-header">
                   <h1 class="text-center">${manager.name}</h1>
                    <h2 class="text-center">Manager</h2>
                </div>

                <div class='card-body'>
                      <p>ID: ${manager.id}</p>
                      <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                      <p>Office Number: ${manager.officeNumber}</p>
                </div>
            </div>      
        </div>   
      
    `;
}

const engineerHtml = (engineer) => {
    return `
        <div class= "col-md-4 mt-5 mb-4">
            <div class="card"> 
                <div id="cardHeaderEngineer" class="card-header">
                   <h1 class="text-center">${engineer.name}</h1>
                   <h2 class="text-center">Enigneer</h2>
                </div>

                <div class='card-body'>
                    <p>ID: ${engineer.id}<p>
                    <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                    <p>Github: <a href="https://github.com/${engineer.github}" target="blank">${engineer.github}</a></p>
                </div>  
            </div>   
        </div>   
    `;
}

const internHtml = (intern) => {
    return `
        <div class= "col-md-4 mt-5 mb-4">
            <div class="card">
                <div id="cardHeaderIntern" class="card-header">
                   <h1 class="text-center">${intern.name}</h1>
                   <h2 class="text-center">Enigneer</h2>
                </div>

                <div class='card-body'>
                      <p>ID: ${intern.id}<p>
                      <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                      <p>School: ${intern.school}</p>
                </div> 
            </div>  
        </div>   
    `;
}

const teamHtml = (teamEmployees) => {
    let htmlEmployeeCards = [];

    for (let i = 0; i < teamEmployees.length; i++) {
        console.log(teamEmployees[i])

        if (teamEmployees[i].getRole() === "Manager") {
            const manager = managerHtml(teamEmployees[i]);
            htmlEmployeeCards.push(manager)
        }
        else if (teamEmployees[i].getRole() === "Engineer") {
            const engineer = engineerHtml(teamEmployees[i]);
            htmlEmployeeCards.push(engineer)
        }
        else if (teamEmployees[i].getRole() === "Intern") {
            const intern = internHtml(teamEmployees[i]);
            htmlEmployeeCards.push(intern)
        }
    }
    let htmlEmployee = htmlEmployeeCards.join('');


    const generateTeamProfile = generateHTML(htmlEmployee);
    return generateTeamProfile;
};

const generateHTML = (htmlEmployee) => {
    return (
        `
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="./style.css"/>
	<title> Team Profile Generator </title>
</head>

<body>

<header>
    <h1 class="text-center"> Team Profile Generator </h1>
</header> 

<main> 

<section>
<div class="container">
    <div class="row">

        ${htmlEmployee}
    </div>
</div>
</section>


</main>

</body>

</html>
`
    )
};

// whatever you give me, I will allow other js files to import and use.  I will make these things available to all other files
module.exports = teamHtml;
