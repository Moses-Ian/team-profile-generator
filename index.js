//dependencies
//====================================================
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const inquirer = require('inquirer');

//variables
//====================================================
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
		name: 'school',
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

let employeeList = [];

//functions
//====================================================
const doSomething = () => console.log(employeeList);

const askManagerQuestions = () => {
	return inquirer.prompt(managerQuestions);
}

const askEngineerQuestions = () => {
	return inquirer.prompt(engineerQuestions);
}

const askInternQuestions = () => {
	return inquirer.prompt(internQuestions);
}

const askMoreEmployees = () => {
	inquirer.prompt(moreEmployeesQuestions)
	.then(answers => {
		if (answers.more == 'Engineer')
			askEngineerQuestions()
				.then(answers => {
					const {name, id, email, github} = answers;	//destructure the answers...
					employeeList.push(new Engineer(name, id, email, github));	//...and pass them to engineer constructor...
					askMoreEmployees();	//...and ask if they have more employees
				});
		else if (answers.more == 'Intern')
			askInternQuestions()
				.then(answers => {
					const {name, id, email, school} = answers;
					employeeList.push(new Intern(name, id, email, school));
					askMoreEmployees();
				});
		else 
			//we're done -> do something
			doSomething();
	});
};
























// start of code
//====================================================

askManagerQuestions()
	.then(answers => {
		const {name, id, email, office} = answers;	//destructure the answers...
		employeeList.push(new Manager(name, id, email, office));	//...and pass them to manager constructor...
		askMoreEmployees();	//...and ask if they have more employees
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	