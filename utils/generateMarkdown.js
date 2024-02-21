function getLicenseBadge(data) {
  let licenseBadge= ''
  if(data.license === 'MIT') {
    licenseBadge= `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (licenseType === 'Mozilla') {
    licenseBadge= `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  } else if (licenseType === 'Apache') {
    licenseBadge= `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else {
    license.license = "N/A"
  }
  return yourLicense;
};
 

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
