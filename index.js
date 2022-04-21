// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const path = require('path');
const { title } = require('process');
const generateMarkdown = require('./utils/generateMarkdown')



// TODO: Create an array of questions for user input
const questions = [
    
    /* Pass your questions in here */
    {
      name: 'github',
      type: 'input',
      message: 'what is your github username'
    },
    {
      name: 'email',
      type: 'input',
      message: 'what is your email address?'
    },
    {
      name: 'title',
      type:'input',
      message: 'what is your project title?'
    }, 
    {
      name: 'description',
      type: 'input',
      message: 'please write a short project description'
    },
    {
      name: 'license',
      type: 'list',
      message: 'what kind of license does your project have?',
      choices:['apache 2.0','boost software','bsd 3-software','bsd 2-clause','none']
    },
   
  ]
    
  
  // .then((answers) => {
  //   // Use user feedback for... whatever!!
  // })
  // .catch((error) => {
  //   if (error.isTtyError) {
  //     // Prompt couldn't be rendered in the current environment
  //     console.log('prompt couldnt be rendered in the current enviroment');
  //   } else {
  //     // Something else went wrong
  //     console.log('something else went wrong');

  //   }
  // })


// TODO: Create a function to write README file

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then((answers)=>fs.writeFileSync('README.md',generateMarkdown(answers)))
  .then(()=> console.log('success, you have created a good readme file'))
  .catch((err)=> console.log(err));
}

// Function call to initialize app
init();
