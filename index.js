const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
    {
      type: 'input',
      name: 'title',
      message: "What's the title of your project?"
    },
   
    {
      type: 'input',
      name: 'description',
      message: "Write a brief description of your project"
    },

    {
      type: 'input',
      name: 'features',
      message: "List and describe the main features of your project"
    },

    {
      type: 'checkbox',
      message: 'Which programming languages were used?',
      name: 'stack',
      choices: [' HTML', ' CSS', ' JavaScript', ' MySQL', ' jQuery', ' C++', " Node.js"]
    },

    {
      type: 'input',
      message: 'Describe your experience with new tools you used, e.g, dependencies, runtimes, etc',
      name: 'experience'
    },

    {
      type: 'input',
      name: 'future',
      message: "What are the future prospects of the application?"
    },
    
    {
      type: 'checkbox',
      message: 'Which license do you prefer for your project?',
      name: 'license',
      choices: [' AFL-3.0', ' Apache-2.0', ' Artistic-2.0', ' BSL-1.0', ' MIT', ' ISC', " LGPL-2.1"]
    },
]
  inquirer.prompt(questions).then((answers) => {
    const formattedAnswer =`
#### Table of contents
[Features](#description)\n
[Languages](#stack)\n
[New Tools](#experience)\n
[Future Prospects](#future-prospects)\n
[License](#license)\n
# ${answers.title}
${answers.description}
### Features
${answers.features}
### Languages 
${(answers.stack)}.
### New Tools     
${answers.experience}
### Future Prospects    
${answers.future}
### License  
${answers.license}
`
    fs.writeFile("READMEgen.md", formattedAnswer, (err) => {
        err ? console.log(err) : console.log("Successful");
    })
  });