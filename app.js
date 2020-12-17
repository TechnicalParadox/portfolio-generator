// const printProfileData = profileDataArr => {
//   // This...
//   for (let i = 0; i < profileDataArr.length; i += 1) {
//     console.log(profileDataArr[i]);
//   }
//
//   console.log('================');
//
//   // Is the same as this...
//   profileDataArr.forEach(profileItem => console.log(profileItem));
// };
//
// printProfileData(profileDataArgs);

const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template.js');
//
// let pageHTML = generatePage(name, github);
//
// fs.writeFile('./index.html', pageHTML, err =>
// {
//   if (err) throw err;
//
//   console.log("Portfolio complete! Check out index.html to see the output!");
// });

const promptProject = portfolioData =>
{
  console.log(`
=================
Add a new project
=================
`);
  if (!portfolioData.projects)
    portfolioData.projects = [];

  return inquirer.prompt(
    [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project?*',
        validate: a => {return a ? true : "Please enter the name of your project!"}
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project.*',
        validate: a => {return a ? true : "Please enter a description of the project!"}
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you build this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project.*',
        validate: a => {return a ? true : "Please enter a link to the project!"}
      },
      {
        type: 'confirm',
        name: 'feature',
        message: 'Would you like to feature this project?',
        default: false
      },
      {
        type: 'confirm',
        name: 'confirmAddProject',
        message: 'Would you like to enter another project?',
        default: false
      }
    ]
  )
  .then(projectData =>
  {
    portfolioData.projects.push(projectData);
    if (projectData.confirmAddProject)
      return promptProject(portfolioData);
    else
      return portfolioData;
  });
};

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?*',
      validate: a => {return a ? true : "Please enter your name!"}
    },
    {
      type: 'input',
      name: 'username',
      message: 'What is your GitHub username?*',
      validate: a => {return a ? true : "Please enter your GitHub username!"}
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about yourself:'
    }
  ])
  .then(promptProject)
  .then(portfolioData => console.log(portfolioData));
