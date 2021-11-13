const Engineer = require('../lib/Engineer');

test('creates engineer object', () => {
    const engineer = new Engineer("Jennifer");

    expect(engineer.getName()).toBe("Jennifer");
});

test('creates engineer github', () => {
    const engineer = new Engineer("Jennifer", 1, "jenlucas@gmail.com", "jenmlucas");

    expect(engineer.getGithub()).toBe("jenmlucas");
});

test('creates engineer role', () => {
    const engineer = new Engineer("Jennifer", 2, "jenlucas1@gmail.com", "jenmlucas1");

    expect(engineer.getRole()).toBe("Engineer");
});