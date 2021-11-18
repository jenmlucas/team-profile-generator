const inquirer = require('inquirer');
const fs = require("fs");

const teamHtml = require("./src/generate-site");

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const team = []; 

const promptEmployee = () => {
    return inquirer.prompt([
        {
            type: "confirm",
            name: "addEmployee",
            message: "Would you like to add an Employee to your team?",
            default: true
        }
    ])
        .then(answers => {
            if (answers.addEmployee) {
                promptRole();
            }
            else {
              writeToFile();
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
            name: "managerId",
            message: "Enter Manager's Id.",
        },
        {
            type: "input",
            name: "managerEmail",
            message: "Enter Manager's email",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Please enter office phone number."
        }
    ])
        .then(answers => {
            promptEmployee();
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber);
            console.log(manager)

            team.push(manager);
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
            name: "engineerId",
            message: "Enter Engineer's Id.",
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "Enter Engineer's email",
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "Please enter GitHub Username."
        }
    ])
        .then(answers => {
            promptEmployee();
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            console.log(engineer)

            team.push(engineer);
            console.log(team);
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
            name: "internId",
            message: "Enter Intern's Id.",
        },
        {
            type: "input",
            name: "internEmail",
            message: "Enter Intern's email",
        },
        {
            type: "input",
            name: "school",
            message: "Please enter the name of school intern attended."
        }
    ])
        .then(answers => {
            promptEmployee();
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.school);
            console.log(intern)

            team.push(intern);
        })
};

function writeToFile() {
    fs.writeFileSync('./dist/index.html', teamHtml(team))  
        // teamHtml(team);
    }



promptEmployee();