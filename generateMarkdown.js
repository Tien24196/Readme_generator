// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

    if (license === "No license") {
            return ""
    }
    else if (license === "GNU AGPLv3") {
        return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
    } else if (license === "GNU GPLv3") {
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    } else if (license === "GNU LGPLv3") {
        return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
    } else if (license === "Apache 2.0") {
        return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else if (license === "Boost Software 1.0") {
        return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    } else if (license === "MIT") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else {
        return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    }
    };

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === "No license") {
            return ""
    }
    else if (license === "GNU AGPLv3") {
        return "https://www.gnu.org/licenses/agpl-3.0";
    } else if (license === "GNU GPLv3") {
        return "https://www.gnu.org/licenses/gpl-3.0";
    } else if (license === "GNU LGPLv3") {
        return "https://www.gnu.org/licenses/lgpl-3.0";
    } else if (license === "Apache 2.0") {
        return "https://opensource.org/licenses/Apache-2.0";
    } else if (license === "Boost Software 1.0") {
        return "https://www.boost.org/LICENSE_1_0.txt";
    } else if (license === "MIT") {
        return "https://opensource.org/licenses/MIT";
    } else {
        return "https://opensource.org/licenses/MPL-2.0";
    }
    };



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === "No license") {
        return ""
    } else {
        return "This application is covered by " + license + " license."
    }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

${renderLicenseBadge(data.license)}
## Description
${data.description}
## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
    
## Installation
${data.installation}
## Usage
${data.usage}
## License 
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

## Contributing 
${data.contributing}
## Tests
${data.tests}
## Questions
* Please contact me with any questions at:
* GitHub: [${data.username}](https://github.com/${data.username})
* Email: ${data.email}
`;
};

module.exports = generateMarkdown;
