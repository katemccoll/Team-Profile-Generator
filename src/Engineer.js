const Employee = require("./Employee");

class Engineer extends Employee {

    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }

    getIcon() {
        return "fas fa-glasses";
    }

    generateSpecialRows() {
        return `<li class="email list-group-item">Github: <a href="https://github.com/${this.getGithub()}">${this.getGithub()}</a></li>`
    }

}

module.exports = Engineer;