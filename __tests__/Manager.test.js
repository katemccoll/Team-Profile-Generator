const Manager = require("../src/Manager");

describe("Manager", () => {
    it("Can create new manager", () => {
        const manager = new Manager("Name", 11, "email@email.com", "officeNumber");
        expect(manager !== null).toBe(true);
        expect(manager.getName()).toBe("Name");
        expect(manager.getId()).toBe(11);
        expect(manager.getEmail()).toBe("email@email.com");
        expect(manager.getOfficeNumber()).toBe("officeNumber");
    });

    it("Role should be Manager", () => {
        expect(new Manager("Name", 1, "email@email.com", "officeNumber").getRole()).toBe("Manager");
    });

    it("Icon should be coffee", () => {
        expect(new Manager("Name", 1, "email@email.com", "officeNumber").getIcon()).toBe("fas fa-mug-hot");
    });


});