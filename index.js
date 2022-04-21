// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const path = require('path');
const { title } = require('process');
const generatMarkdown = requirer('./utils/generateMarkdown')



// TODO: Create an array of questions for user input
const questions = [
    
inquirer
  .prompt([
    /* Pass your questions in here */
    {
      name: 'title',
      type: 'input',
      message: 'what is your'
    },
    {
      name: 'title',
      type: 'input',
      message: 'what is your'
    },
    {
      name: 'title',
      type: 'input',
      message: 'what is your'
    }, 
    {
      name: 'title',
      type: 'input',
      message: 'what is your'
    },
    {
      name: 'title',
      type: 'input',
      message: 'what is your'
    }

    
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log('prompt couldnt be rendered in the current enviroment');
    } else {
      // Something else went wrong
      console.log('something else went wrong');

    }
  })
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            console.log(err)}
    })
    
}
// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then((data)=>fs.writeFileSync('README.md',generateMarkdown(data)))
  .then(()=> console.log('success, you have created a good readme file'))
  .catch((err)=> console.log(err));
}

// Function call to initialize app
init();


function generateMarkdown(data) {
  return 
  ``
}