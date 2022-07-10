// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown.js');


//  Array of questions for user input
const promptUser = () => {
return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter the Name of your Project?',
     
    },
    {
      type: 'input',
      name: 'desc',
      message: 'Description of your project?',
      
    },
    {
      type: 'input',
      name: 'installguide',
      message: 'Project Installation Guidelines',
      
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Project Usage instructions',
     
    },
     {
      type: 'input',
      name: 'Image',
      message: 'Demo Image of Your App ',
     
    },
    {
      type: 'input',
      name: 'contrib',
      message: 'Who contributes to the project',
     
    },
     {
      type: 'input',
      name: 'test',
      message: 'Enter the Test Information',
     
    },
    {
      name: "license",
      type: "list",
      message: 'Choose License for your Project',
      choices: ["MIT", "GPLv3", "Apache","BSD 2-Clause License","GNU GPL v2"],
      
    },
     {
      type: 'input',
      name: 'gituser',
      message: 'Enter your Github Username',
     
    }, {
      type: 'input',
      name: 'email',
      message: 'Enter your Emailid',
     
    },
  ]);
};

//Initialization

const init = () => {
  promptUser()
    .then((data) => {
      const fileName = 'README.md';
      //Calling generateMarkdown function 
      console.log(`Readme Generated`);
      const content = generate(data);
      writeToFile(fileName, content)
    
//  function to write README file
function writeToFile(fileName, content) {
    fs.writeFile(fileName, content, (err) =>
  err ? console.error(err) : console.log('Success!')
    );
}})

};

init();
