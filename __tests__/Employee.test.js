const Employee = require("../src/Employee");

describe("Employee", () => {
    it("Can create new employee", () => {
        const employee = new Employee("Name", 11, "email@email.com");
        expect(employee !== null).toBe(true);
        expect(employee.getName()).toBe("Name");
        expect(employee.getId()).toBe(11);
        expect(employee.getEmail()).toBe("email@email.com");
    });

    it("Role should be Employee", () => {
        expect(new Employee("Name", 1, "email@email.com").getRole()).toBe("Employee");
    });

    it("Should generate some card", () => {
        expect(new Employee("Name", 1, "email@email.com").generateCard().length).toBeGreaterThan(0);

    });

});