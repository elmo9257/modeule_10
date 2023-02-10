const inquirer = require("inquirer");
const path = require("path"); // Creates and formats file paths for us
const fs = require("fs"); // fs = file system. Read and writes files

const Manager = require("./src/Manager");

const teamMembers = [];

const init = () => {
  const createManager = async () => {
    const managerInfo = await inquirer.prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the name of your Manager?",
        validate: (answer) => {
          if (answer) {
            return true;
          }
          return "Please enter at least 1 character";
        },
      },
      {
        type: "input",
        name: "managerId",
        message: "What is the Manager's ID?",
        validate: (answer) => {
          const id = answer.match(/^[1-9]\d*$/);
          if (id) {
            return true;
          }
          return "Please enter a positive integer";
        },
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the Manager's email?",
        validate: (answer) => {
          const email = answer.match(/\S+@\S+\.\S+/);
          if (email) {
            return true;
          }
          return "Please enter valid email address";
        },
      },
      {
        type: "input",
        name: "managerOffice",
        message: "What is the Manager's office number?",
        validate: (answer) => {
          const officeNumber = answer.match(/^[1-9]\d*$/);
          if (officeNumber) {
            return true;
          }
          return "Please enter a positive integer";
        },
      },
    ]);

    const manager = new Manager(
      managerInfo.managerName,
      managerInfo.managerId,
      managerInfo.managerEmail,
      managerInfo.managerOffice
    );

    teamMembers.push(manager);
  };
};

init();
