var licenseBadge();
function getLicenseBadge(data) {
  if (data.license === 'MIT') {
    licenseBadge = `[License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)` 
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  getLicenseBadge(data)
  return `# ${data.title}
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Usage
  ${data.usage}

  ## Features
  ${data.features}
  
  ## Built With
  ${data.builtWith}

  ## Authors
  ${data.authors}
  GitHub: [${data.github}](https://github.com/${data.github})
  link: [${data.link}](https://${data.github.io})
  Email: ${data.email}
  
  ## License
  This project is licensed under the ${data.license} license.
  ${licenseBadge}

`;
}

module.exports = generateMarkdown;
