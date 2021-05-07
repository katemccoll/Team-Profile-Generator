const Employee = require("./Employee");

class Intern extends Employee {

    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }

    getIcon() {
        return "fas fa-user-graduate"
    }
    generateSpecialRows() {
        return `<li class="school list-group-item">School: ${this.getSchool()}</li>`
    }
}

module.exports = Intern;