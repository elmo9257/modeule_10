const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, role, id, email, officeNumber) {
    super(name, role, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;
