
const Employee = require('../lib/Employee');

test('create an employee object', () => {
    const employee = new Employee("Jennifer");

    expect(employee.getName()).toBe("Jennifer");

});

test('create an employee id', () => {
    const employee = new Employee("Jennifer", 1, "jenmlucas1@gmail.com");

    expect(employee.getId()).toBe(1);
});

test('create an employee email', () => {
    const employee = new Employee("Jennifer", 2, "lucasjen94@gmail.com");

    expect(employee.getEmail()).toBe("lucasjen94@gmail.com");
});

test('create an employee role', () => {
    const employee = new Employee("Jennifer", 3, "jenDavila94@gmail.com");

    expect(employee.getRole()).toBe("Employee");
});

