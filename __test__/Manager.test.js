const Manager = require('../lib/Manager');

test('creates Manager object', () => {
    const manager = new Manager("Jennifer");

    expect(manager.getName()).toBe("Jennifer");
});

test('creates Manager role', () => {
    const manager = new Manager("Jennifer", 2, "jenlucas1@gmail.com", "jenmlucas1");

    expect(manager.getRole()).toBe("Manager");
});