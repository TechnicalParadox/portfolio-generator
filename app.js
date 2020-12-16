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

const fs = require('fs');
const generatePage = require('./src/page-template.js');

let pageHTML = generatePage(name, github);

fs.writeFile('index.html', pageHTML, err =>
{
  if (err) throw err;

  console.log("Portfolio complete! Check out index.html to see the output!");
});
