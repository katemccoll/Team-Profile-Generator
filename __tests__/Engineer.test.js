const Engineer = require("../src/Engineer");

describe("Engineer", () => {
    it("Can create new engineer", () => {
        const engineer = new Engineer("Name", 11, "email@email.com", "mygithub");
        expect(engineer !== null).toBe(true);
        expect(engineer.getName()).toBe("Name");
        expect(engineer.getId()).toBe(11);
        expect(engineer.getEmail()).toBe("email@email.com");
        expect(engineer.getGithub()).toBe("mygithub");
    });

    it("Role should be Engineer", () => {
        expect(new Engineer("Name", 1, "email@email.com", "github").getRole()).toBe("Engineer");
    });

    it("Icon should be glasses", () => {
        expect(new Engineer("Name", 1, "email@email.com", "github").getIcon()).toBe("fas fa-glasses");
    });


});