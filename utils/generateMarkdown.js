// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let a;
    console.log(license)
    if(license==="MIT")
    {
     a = `[![license: MIT](https://img.shields.io/badge/license-mit-orange)](https://opensource.org/licenses/MIT)`
    return a
    }
    else if(license==="GPLv3") 
    {
        let b = `[![license: GPLv3](https://img.shields.io/badge/license-GPLv3-red)](https://www.gnu.org/licenses/gpl-3.0)`
         return b
    }
     else if(license==="Apache")
    {
    let c = `[![license](https://img.shields.io/badge/license-Apache-blue)](https://opensource.org/licenses/Apache-2.0)`
     return c
    }
    else if(license==="BSD 2-Clause License")
    {
    let d = `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
     return d
    }
    else if(license==="GNU GPL v2")
    {
    let e = `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
     return e
    }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
 return`# License \n ${renderLicenseBadge(data.license)}
# **Project Title** \n ${data.title}
# **Table of Contents** \n
-[Description](#project-description)\n
-[installation](#installation-guidelines)\n
-[Usage](#project-usage-instructions)\n
-[Image](#image)\n
-[Contribution](#contributions)\n
-[Tests](#tests)\n
-[Questions](#questions)
 # **Project Description** \n ${data.desc}
 # **Installation Guidelines** \n ${data.installguide}
 # **Project Usage Instructions** \n ${data.usage}
  # **Image** \n ![Image](${data.Image})
# **Contributions** \n ${data.contrib}
# **Tests** \n ${data.test}
# **Questions** \n Your Profile https://github.com/${data.gituser} for more question reach me at ${data.email}`

}

module.exports = generateMarkdown;
