const Intern = require('../lib/Intern.js');

test('creates a intern object', () => {
	const intern = new Intern('Alice', 1, 'Alice@company.com', 'UofA');
	
	expect(intern.name).toBe('Alice');
	expect(intern.id).toBe(1);
	expect(intern.email).toBe('Alice@company.com');
	expect(intern.school).toBe('UofA');
});

test('gets intern school', () => {
	const intern = new Intern('Alice', 1, 'Alice@company.com', 'UofA');
	
	expect(intern.getSchool()).toBe('UofA');
});

test('gets intern role', () => {
	const intern = new Intern('Alice', 1, 'Alice@company.com', 'UofA');
	
	expect(intern.getRole()).toBe('Intern');
});

