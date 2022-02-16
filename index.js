const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const inquirer = require('inquirer');

const managerQuestions = [
	{
		type: 'input',
		name: 'name',
		message: "What is the Manager's name?"
	},
	{
		type: 'input',
		name: 'id',
		message: "What is the Manager's ID?"
	},
	{
		type: 'input',
		name: 'email',
		message: "What is the Manager's email?"
	},
	{
		type: 'input',
		name: 'office',
		message: "What is the Manager's office number?"
	}
];
		
const engineerQuestions = [
	{
		type: 'input',
		name: 'name',
		message: "What is the Engineer's name?"
	},
	{
		type: 'input',
		name: 'id',
		message: "What is the Engineer's ID?"
	},
	{
		type: 'input',
		name: 'email',
		message: "What is the Engineer's email?"
	},
	{
		type: 'input',
		name: 'github',
		message: "What is the Engineer's GitHub username?"
	}
];
		
const internQuestions = [
	{
		type: 'input',
		name: 'name',
		message: "What is the Intern's name?"
	},
	{
		type: 'input',
		name: 'id',
		message: "What is the Intern's ID?"
	},
	{
		type: 'input',
		name: 'email',
		message: "What is the Intern's email?"
	},
	{
		type: 'input',
		name: 'office',
		message: "What is the Intern's school?"
	}
];

const moreEmployeesQuestions = [
	{
		type: 'list',
		name: 'more',
		message: 'Would you like to add another employee?',
		choices: ['Engineer', 'Intern', 'Done']
	}
];

const askManagerQuestions = () => {
	return inquirer.prompt(managerQuestions);
}

const askMoreEmployees = () => {};

let employeeList = [];

askManagerQuestions()
	.then(answers => {
		const {name, id, email, office} = answers;	//destructure the answers...
		employeeList.push(new Manager(name, id, email, office));	//...and pass them to manager constructor
		askMoreEmployees();
	});