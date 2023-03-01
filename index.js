const inquirer = require("inquirer");

const fs = require("fs");

const htmlPage = require("./tests/dist/index.html")

const Manager = require("./tests/manager")
const Engineer = require("./tests/engineer")
const Intern = require("./tests/intern")

const allEmployees = [];

let isTeamFinished = false;

const validateEntry = (userInput)=>{
    if(userInput===""){
        return "please give your answer";
    }else{
        return true;
    }
}

const init = async ()=>{
    await makeManager();

    while (!isTeamFinished){
        const typeQuestions = [
            {
                type: "list",
                message: "Choose the employee type you want to add",
                name: "employeeType",
                choices:[
                    {name: "Engineer", value: "engineer", short: "Engineer"},
                    {name: "Intern", value: "intern", short:"Intern"},
                    {name: "None", value: "none", short: "None"}
                ],
            }
        ]
    


const { employeeType }=await inquirer.prompt(typeQuestions);
if (employeeType === "none"){
    isTeamFinished = true;
}else{
    if (employeeType==="engineer"){
        await makeEngineer();
    }
    if (employeeType==="intern"){
        await makeIntern();
    }
}
}


const HTML = htmlPage(allEmployees);
fs.writeFileSync("index.html", HTML, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("HTML file created");
    }
})
}

const makeManager = async()=>{
    const managerQuestions=[
        {
            type: "input",
            message: "enter manager name: ",
            name:"enter name",
            validate: validateEntry,
        },
        {
            type: "input",
            message: "enter employee ID: ",
            name:"id",
            validate: validateEntry,
        },
        {
            type: "input",
            message: "enter office number: ",
            name:"officeNumber",
            validate: validateEntry,
        },
        {
            type: "input",
            message: "enter work email: ",
            name:"email",
            validate: validateEntry,
        },

    ];

    const managerAnswer= await inquirer.prompt(managerQuestions);
    const manager = new Manager(managerAnswer);
    allEmployees.push(manager)
};

const makeEngineer = async()=>{
    const engineerQuestion =[
        {
            type: "input",
            message: "Enter engineer name: ",
            name:"name",
            validate: validateEntry,
        },
        {
            type: "input",
            message: "Enter engineer ID: ",
            name:"id",
            validate: validateEntry,
        },
        {
            type: "input",
            message: "Enter engineer email: ",
            name:"email",
            validate: validateEntry,
        },
        {
            type: "input",
            message: "Enter engineer github profile: ",
            name:"profile",
            validate: validateEntry,
        },
    ];

    const engineerAnswer = await inquirer.prompt(engineerQuestion);
    const engineer = new Engineer(engineerAnswer);
    allEmployees.push(engineer)
};

const makeIntern = async ()=>{
    const internQuestion = [
        {
            type: "input",
            message: "Enter intern name: ",
            name: "name",
            validate: validateEntry,
        },
        {
            type: "input",
            message: "Enter intern ID: ",
            name: "ID",
            validate: validateEntry,
        },
        {
            type: "input",
            message: "Enter intern email: ",
            name: "email",
            validate: validateEntry,
        },
        {
            type: "input",
            message: "Enter intern school: ",
            name: "school",
            validate: validateEntry,
        },
    ];

    const internAnswer = await inquirer.prompt(internQuestion);
    const intern = new Intern(internAnswer);
    allEmployees.push(intern)

}

init();
