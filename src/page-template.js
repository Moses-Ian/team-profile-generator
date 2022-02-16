const buildExtra = employee => {
	const role = employee.getRole();
	if (role == 'Manager')
		return `Office Number: ${employee.getOfficeNumber()}`;
	if (role == 'Engineer')
		return `GitHub: <a href='https://github.com/${employee.getGithub()}' target='_blank'>${employee.getGithub()}</a>`;
	if (role == 'Intern')
		return `School: ${employee.getSchool()}`;
};

const cardTemplate = employee => 
`			<div class='card'>
				<h2>${employee.getName()}</h2>
				<h3>${employee.getRole()}</h3>
				<p>ID: ${employee.getId()}</p>
				<p>Email: <a href='mailto:${employee.getEmail()}' target='_blank'>${employee.getEmail()}</a></p>
				<p>${buildExtra(employee)}</p>
			</div>
`;

const buildMain = employeeList => {
	let result = ``;
	for(let i=0; i<employeeList.length; i++){
		result = result.concat(cardTemplate(employeeList[i]));
	}
	return result;
}

const pageTemplate = employeeList => 
`  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Portfolio</title>
    <link rel="stylesheet" href="style.css">
  </head>

  <body>
    <header>
			<h1>Team Portfolio</h1>
    </header>
    <main>
${buildMain(employeeList)}    </main>
    <footer>
    </footer>
  </body>
  </html>`;

module.exports = employeeList => {
	return pageTemplate(employeeList);
}