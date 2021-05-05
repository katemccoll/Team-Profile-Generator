const inquirer = require("inquirer");
const Manager = require("./Manager");
const Intern = require("./Intern");
const Engineer = require("./Engineer");

const EMPLOYEE_QUESTIONS = [
    {
        type: 'input',
        name: 'name',
        message: 'Name',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email',
    },
    {
        type: 'input',
        name: 'employeeID',
        message: 'Employee ID',
    },
];

const INTERN_QUESTIONS = [
    {
        type: 'input',
        name: 'school',
        message: 'School',
    },
];

const ENGINGEER_QUESTIONS = [
    {
        type: 'input',
        name: 'github',
        message: 'GitHub'
    }
];

const MANAGER_QUESTIONS = [
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Office Number',
    }
];


function promptEmployeeType() {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'employeeType',
            message: 'Select type of employee to add, or None to exit.',
            choices: ['Engineer', 'Intern', 'None'],
        },
    ])
}

function promptEmployee(role) {

    let questions = EMPLOYEE_QUESTIONS;
    role = role.toLowerCase();

    switch (role) {
        case "manager":
            questions = questions.concat(MANAGER_QUESTIONS);
            break;
        case "intern":
            questions = questions.concat(INTERN_QUESTIONS);
            break;
        case "engineer":
            questions = questions.concat(ENGINGEER_QUESTIONS);
            break;
    }

    return inquirer.prompt(questions).then((answers) => {
        switch (role) {
            case "manager":
                return new Manager(answers.name, answers.employeeID, answers.email, answers.officeNumber);
            case "intern":
                return new Intern(answers.name, answers.employeeID, answers.email, answers.school);
            case "engineer":
                return new Engineer(answers.name, answers.employeeID, answers.email, answers.github);

        }
    });
}

function askUserForTeamDetails() {
    let employees = [];

    const promptNextEmployee = (employeeType) => {

        let employeeTypePromise = employeeType !== undefined ? Promise.resolve({employeeType: employeeType}) : promptEmployeeType();
        return employeeTypePromise.then((answers) => {
            let employeeType = answers.employeeType.toLowerCase();

            if (employeeType === 'none') {
                return employees;
            }

            return promptEmployee(employeeType).then((employeeAnswers) => {
                employees.push(employeeAnswers);
                return promptNextEmployee();
            });
        });
    };

    return promptNextEmployee("manager");
}


module.exports = {
    askUserForTeamDetails: askUserForTeamDetails
};