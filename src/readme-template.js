function createBadge(license) {
    if(license === 'Apache') {
        return "[![Apache License, Version 2.0](https://img.shields.io/badge/license-Apache%202.0-green)](https://opensource.org/licenses/Apache-2.0)"
    }
}

module.exports = READMEdata => {
    const { projectName, projectDescription, installInstructions, 
    usageInstructions, licenses, contributors, testInstructions } = READMEdata;

    return `
# ${projectName}
${createBadge(licenses)}
## Description
${projectDescription}

## Table of Contents

- [Installation Instructions](#installation)
- [Usage Instructions](#usage)
- [Licenses](#licenses)
- [Credits](#credits)
- [Testing Instructions](#tests)

## Installation
${installInstructions}

## Usage
${usageInstructions}

## Licenses
${licenses}

## Credits
${contributors}

## Tests
${testInstructions}
`
};