// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license)
  if (license !== 'None') {
    return 'My License'
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description:
  ${data.description}
  ## Table of Contents:

  ## Installation:
  To install necessary dependencies, run the following command:
  ${data.installation}
  ## Usage:
  ${data.usage}
  ## License:
  ${renderLicenseBadge(data.license)}
  ## Contributing:
  ${data.contributions}
  ## Tests:
  To run tests, run the following command: ${data.tests}
  ## Questions:
  If you have any questions feel free to email me at: ${data.email}. You can also view my GitHub at https://github.com/${data.github}
`;
}

module.exports = generateMarkdown;
