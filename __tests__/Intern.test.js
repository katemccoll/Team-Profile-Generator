const Intern = require("../src/Intern");

describe("Intern", () => {
    it("Can create new intern", () => {
        const intern = new Intern("Name", 11, "email@email.com", "school");
        expect(intern !== null).toBe(true);
        expect(intern.getName()).toBe("Name");
        expect(intern.getId()).toBe(11);
        expect(intern.getEmail()).toBe("email@email.com");
        expect(intern.getSchool()).toBe("school");
    });

    it("Role should be Intern", () => {
        expect(new Intern("Name", 1, "email@email.com", "school").getRole()).toBe("Intern");
    });

    it("Icon should be student", () => {
        expect(new Intern("Name", 1, "email@email.com", "school").getIcon()).toBe("fas fa-user-graduate");
    });


});