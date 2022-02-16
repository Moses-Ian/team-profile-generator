const Engineer = require('../lib/Engineer.js');

test('creates a engineer object', () => {
	const engineer = new Engineer('Alice', 1, 'Alice@company.com', 'Awesome-Alice');
	
	expect(engineer.name).toBe('Alice');
	expect(engineer.id).toBe(1);
	expect(engineer.email).toBe('Alice@company.com');
	expect(engineer.github).toBe('Awesome-Alice');
});

test('gets engineer github', () => {
	const engineer = new Engineer('Alice', 1, 'Alice@company.com', 'Awesome-Alice');
	
	expect(engineer.getGithub()).toBe('Awesome-Alice');
});

test('gets engineer role', () => {
	const engineer = new Engineer('Alice', 1, 'Alice@company.com', 'Awesome-Alice');
	
	expect(engineer.getRole()).toBe('Engineer');
});

