module.exports = templateData => {
    const { projectName, projectDescription, installInstructions, 
    usageInstructions, licenses, contributors, testInstructions } = templateData;

    return `
    # ${projectName}

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