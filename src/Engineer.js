const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, "Engineer", id, email);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;
