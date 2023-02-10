const inquirer = require("inquirer");
const path = require("path"); // Creates and formats file paths for us
const fs = require("fs"); // fs = file system. Read and writes files

const Manager = require("./src/Manager");
const Engineer = require("./src/Engineer");
const Intern = require("./src/Intern");

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
    createTeam();
  };

  const createEngineer = async () => {
    const engineerInfo = await inquirer.prompt([
      {
        type: "input",
        name: "engineerName",
        message: "What is the name of your Engineer?",
        validate: (answer) => {
          if (answer) {
            return true;
          }
          return "Please enter at least 1 character";
        },
      },
      {
        type: "input",
        name: "engineerId",
        message: "What is the Engineer's ID?",
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
        name: "engineerEmail",
        message: "What is the Engineer's email?",
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
        name: "github",
        message: "What is the Engineer's github?",
        validate: (answer) => {
          if (answer) {
            return true;
          }
          return "Please enter at least 1 character";
        },
      },
    ]);

    const engineer = new Engineer(
      engineerInfo.engineerName,
      engineerInfo.engineerId,
      engineerInfo.engineerEmail,
      engineerInfo.github
    );

    teamMembers.push(engineer);
    createTeam();
  };

  const createIntern = async () => {
    const internInfo = await inquirer.prompt([
      {
        type: "input",
        name: "internName",
        message: "What is the name of your Intern?",
        validate: (answer) => {
          if (answer) {
            return true;
          }
          return "Please enter at least 1 character";
        },
      },
      {
        type: "input",
        name: "internId",
        message: "What is the Intern's ID?",
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
        name: "internEmail",
        message: "What is the Intern's email?",
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
        name: "school",
        message: "Where does/did the Intern attend school?",
        validate: (answer) => {
          if (answer) {
            return true;
          }
          return "Please enter at least 1 character";
        },
      },
    ]);

    const intern = new Intern(
      internInfo.internName,
      internInfo.internId,
      internInfo.internEmail,
      internInfo.school
    );

    teamMembers.push(intern);
    createTeam();
  };

  const createTeam = async () => {
    const teamMember = await inquirer.prompt([
      {
        type: "list",
        name: "role",
        message: "What is the employee's role at your company?",
        choices: ["Engineer", "Intern", "There are no more employees to add"],
      },
    ]);

    switch (teamMember.role) {
      case "Engineer":
        createEngineer();
        break;
      case "Intern":
        createIntern();
        break;
      default:
        console.log("You made it!!!");
      // Build our team!
    }
  };

  createManager();
};

init();
