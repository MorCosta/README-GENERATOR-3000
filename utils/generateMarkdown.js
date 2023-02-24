// function to generate markdown for README
function generateMarkdown(data) {
  // Add license badge image and notice
  let licenseBadge = '';
  let licenseNotice = '';
  if (data.license === 'MIT') {
    licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    licenseNotice = 'This application is covered under the [MIT License](https://opensource.org/licenses/MIT).';
  } else if (data.license === 'GNU GPLv3') {
    licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    licenseNotice = 'This application is covered under the [GNU GPLv3 License](https://www.gnu.org/licenses/gpl-3.0).';
  } else if (data.license === 'Apache 2.0') {
    licenseBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    licenseNotice = 'This application is covered under the [Apache 2.0 License](https://opensource.org/licenses/Apache-2.0).';
  } else if (data.license === 'ISC') {
    licenseBadge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
    licenseNotice = 'This application is covered under the [ISC License](https://opensource.org/licenses/ISC).';
  }

  return `
# ${data.title}

${licenseBadge}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  This application is covered under the ${data.license} license.
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  For any questions, please contact ${data.github} at ${data.email}.
  `;
  }


module.exports = generateMarkdown;
