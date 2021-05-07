const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }

    getIcon() {
        return "fas fa-mug-hot";
    }

    generateSpecialRows() {
        return `<li class="list-group-item">Office Number: ${this.getOfficeNumber()}</li>`
    }
}

module.exports = Manager;