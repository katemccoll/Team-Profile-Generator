class Employee {

    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    generateSpecialRows() {
        return "";
    }

    getIcon() {
        return "";
    }

    generateCard() {
        return `<div class="row m-0">
        <div class="col-4 mt-4">
            <div class="card h100" style="width: 18rem;">
                <div class="card-header text-white bg-primary">
                    <h2 class="name">${this.getName()}</h2>
                    <br>
                    <h2 class="role"><i class="${this.getIcon()} pr-3"></i>${this.getRole()}</h2>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="id list-group-item">ID: ${this.getId()}</li>
                    <li class="email list-group-item">Email: <a href = "mailto: ${this.getEmail()}">${this.getEmail()}</a></li>
                    ${this.generateSpecialRows()}
                </ul>
            </div>
        </div>
    </div>`
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }
}

module.exports = Employee;