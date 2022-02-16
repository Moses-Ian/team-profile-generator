const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
	const manager = new Manager('Alice', 1, 'Alice@company.com');
	
	expect(manager.name).toBe('Alice');
	expect(manager.id).toBe(1);
	expect(manager.email).toBe('Alice@company.com');
});

