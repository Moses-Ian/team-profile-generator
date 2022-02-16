const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
	const employee = new Employee('Alice', 1, 'Alice@company.com');
	
	expect(employee.name).toBe('Alice');
	expect(employee.id).toBe(1);
	expect(employee.email).toBe('Alice@company.com');
});

test('gets employee name', () => {
	const employee = new Employee('Alice', 1, 'Alice@company.com');
	
	expect(employee.getName()).toBe('Alice');
});

test('gets employee id', () => {
	const employee = new Employee('Alice', 1, 'Alice@company.com');
	
	expect(employee.getId()).toBe(1);
});

test('gets employee email', () => {
	const employee = new Employee('Alice', 1, 'Alice@company.com');
	
	expect(employee.getEmail()).toBe('Alice@company.com');
});

test('gets employee role', () => {
	const employee = new Employee('Alice', 1, 'Alice@company.com');
	
	expect(employee.getRole()).toBe('Employee');
});

