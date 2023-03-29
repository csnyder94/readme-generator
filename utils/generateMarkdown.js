//Code below takes user input for license and generates a license badge
const licenseBadge = (data) => {
  let licenseType = `${data.license}`
  let chosenLicense = ''

  if (licenseType === 'MIT') {
    chosenLicense = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (licenseType === 'Apache') {
    chosenLicense = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (licenseType === 'Perl') {
    chosenLicense = `[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)`
  }

  return chosenLicense;
}
//Code below takes user input for license and generates a license link
const licenseLink = (data) => {
  let licenseType = `${data.license}`
  let chosenLicense = ''
  if (licenseType === 'MIT') {
    chosenLicense = "(https://opensource.org/licenses/MIT)"
  } else if (licenseType === 'Apache') {
    chosenLicense = "(https://opensource.org/licenses/Apache-2.0)"
  } else if (licenseType === 'Perl') {
    chosenLicense = "(https://opensource.org/licenses/OFL-1.1)"
  }

  return chosenLicense;
};
//Creates markdown file with required acceptance criteria
//Additional comments cannot be added below as it would be included in the generated markdown file as text
function generateMarkdown(data) {
  return `# ${data.title} 
  ${licenseBadge(data)}
  ## Description:
  ${data.description}
  ## Table of Contents:
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation:
  To install necessary dependencies, run the following command:
  \`\`\`
  ${data.installation}
  \`\`\`
  ## Usage:
  ${data.usage}
  ## License: 
  This application is covered under the ${data.license} license.  For more information, visit the following link: ${licenseLink(data)}
  ## Contributing:
  ${data.contribution}
  ## Tests:
  To run tests, run the following command: 
  \`\`\`
  ${data.tests}
  \`\`\`
  ## Questions:
  If you have any questions feel free to email me at: ${data.email}. You can also view my GitHub at https://github.com/${data.github}
`;
}
//"Exports" generateMarkdown function to index.js file
module.exports = generateMarkdown;
