const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
	const employee = new Employee('Alice', 1, 'Alice@company.com');
	
	expect(employee.name).toBe('Alice');
	expect(employee.id).toBe(0);
	expect(employee.email).toBe('Alice@company.com');
});
