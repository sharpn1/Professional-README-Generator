// function to generate markdown for README
function generateMarkdown(data) {
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

`;
}

module.exports = generateMarkdown;