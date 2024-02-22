
// function to generate markdown for README
function generateMarkdown(data) {
  // getLicenseBadge(data)
  console.log(data);
  let licenseBadge = '';
  switch (data.license) {
    case 'MIT':
      licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      break;
    case 'Mozilla':
      licenseBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
      break;
    case 'Apache':
      licenseBadge = `[![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
      break;
    default:
      licenseBadge = '';
  }
  return `
   ${data.title}
  ${licenseBadge}

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
