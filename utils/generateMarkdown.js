var licenseBadge;
function getLicenseBadge(data) {
  if (data.license === 'MIT') {
    licenseBadge = `[License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)` 
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  getLicenseBadge(data)
  return `
  # ${data.title}
  ${badge(data.license)}

  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}
 
  ## License
  This project is licensed under the ${data.license} license.
  ${licenseBadge}

  ## Tests
  ${data.tests}

  ## Contributing
  ${data.credits}
  GitHub: [${data.github}](https://github.com/${data.github})
  link: [${data.link}](https://${data.github.io})
  
  ## Questions
  If you have any questions, please contact me by email: ${data.email}
`;
}

module.exports = generateMarkdown;
