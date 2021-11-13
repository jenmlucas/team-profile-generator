const Intern = require('../lib/Intern');

test('creates intern object', () => {
    const intern = new Intern("Jennifer");

    expect(intern.getName()).toBe("Jennifer");
});

test('creates intern school', () => {
    const intern = new Intern("Jennifer", 1, "jenlucas@gmail.com", "school");

    expect(intern.getSchool()).toBe("school");
});

test('creates intern role', () => {
    const intern = new Intern("Jennifer", 2, "jenlucas1@gmail.com", "school");

    expect(intern.getRole()).toBe("Intern");
});