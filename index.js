const inquirer = require('inquirer');
const generateSite = require("./src/generate-site");
const fs = require("fs");

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const promptEmployee = () => {
    return inquirer.prompt([
        {
            type: "confirm",
            name: "addEmployee",
            message: "Would you like to add an Employee to your team?",
        }
    ])
        .then(answers => {
            if (answers.addEmployee) {
                promptRole();
            }
            else {
              generateHTML();
            } 
        })
};

const promptRole = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Please select which Team Member you'd like to add.",
            choices: ["Manager", "Engineer", "Intern"]
        }
    ])
        .then(answers => {
            if (answers.role === "Manager") {
                promptManager()
            } else if (answers.role === "Engineer") {
                promptEngineer()
            } else if (answers.role === "Intern") {
                promptIntern()
            }
        })
};


const promptManager = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the Manager's name? (Required)",
        },
        {
            type: "input",
            name: "id",
            message: "Enter Employee's Id.",
        },
        {
            type: "input",
            name: "email",
            message: "Enter Employee's email",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Please enter office phone number."
        }
    ])
        .then(answers => {
            promptEmployee();
        })
};

const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the Engineer's name? (Required)",
        },
        {
            type: "input",
            name: "id",
            message: "Enter Employee's Id.",
        },
        {
            type: "input",
            name: "email",
            message: "Enter Employee's email",
        },
        {
            type: "input",
            name: "githubUsername",
            message: "Please enter GitHub Username."
        }
    ])
        .then(answers => {
            promptEmployee();
        })
};

const promptIntern = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the Itern's name? (Required)",
        },
        {
            type: "input",
            name: "id",
            message: "Enter Employee's Id.",
        },
        {
            type: "input",
            name: "email",
            message: "Enter Employee's email",
        },
        {
            type: "input",
            name: "school",
            message: "Please enter the name of school intern attended."
        }
    ])
        .then(answers => {
            promptEmployee();
        })
};

function writeToFile(filename, teamData) {
    const employeeData = generateSite(teamData)
    fs.writeFile(filename, employeeData, (err) => {
        if (err) { console.log(err) }
    })
}

promptEmployee();