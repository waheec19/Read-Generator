// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![Github licence](https://img.shields.io/badge/license-${license.replace(/-/g, "")}-blue)`;
    } else {
      return '';
  }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `[${license}](https://choosealicense.com/licenses/${license.toLowerCase()}/)`;
    } else {
      return ' ';
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## [License](#table-of-contents)
  The application is covered under the following license: ${renderLicenseLink(license)}`;
    } else {
      return ' ';
  }
}

// Function that returns license in table of contents
// If there is no license, return an empty string
function renderLicenseTOC(license) {
  if (license !== 'None') {
  return `* [License](#license)`;
    } else {
      return ' ';
   }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table-of-Contents
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseTOC(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## [Installation](#table-of-contents)
  To install necessary dependencies, run the following command:
    ${data.install}
  ## [Usage](#table-of-contents)
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  ## [Contributing](#table-of-contents)
  ${data.contributing}
  ## [Tests](#table-of-contents)
  To run tests, run the following command:
  
    ${data.test}
  ## [Questions](#table-of-contents)
  If you have any question about the repo, open an issue or contact me directly at [Email: ${data.email}](mailto:${data.email}).
  You can find more of my work at [GitHub](https://github.com/${data.github}).
  
`;
}

module.exports = generateMarkdown;