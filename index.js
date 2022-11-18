/* Javascript för CV-sida, json */

const workList = document.querySelector(".workList");
const educationList = document.querySelector(".educationList")

async function getData() {
    let url = "cv.json";
    const response = await fetch (url);
    let data = await response.json();

    workExperience = data.workExperience;
    education = data.education;

    workExperience.forEach(element => {

        let companyName = document.createElement("li");
        companyName.innerHTML = element.name;
        companyName.className = 'companyname';
        workList.appendChild(companyName);
        

        let companyPlacetime = document.createElement("li");
        companyPlacetime.innerHTML = element.placetime;
        companyPlacetime.className = 'companyplacetime';
        workList.appendChild(companyPlacetime);
        

        if (element.info != undefined) {
            let roleInfo = document.createElement("li");
            roleInfo.innerHTML = element.info;
            roleInfo.className= 'roleinfo';
            workList.appendChild(roleInfo);
        }
        if (element.roles != undefined) {
            element.roles.forEach((role) => {
                let assignmentCompany = document.createElement("li")
                assignmentCompany.innerHTML = role.rolecompany
                assignmentCompany.className = 'assignmentcompany'
                workList.appendChild(assignmentCompany)

                let assignmentInfo = document.createElement("li")
                assignmentInfo.innerHTML = role.info
                assignmentInfo.className= 'roleinfo';
                workList.appendChild(assignmentInfo)
            })
        }     

    });

    education.forEach(element => {
            let education = document.createElement("li");
            education.innerHTML = element.education;
            education.className = 'education';
            educationList.appendChild(education);

            let school = document.createElement("li");
            school.innerHTML = element.school;
            school.className = 'school';
            educationList.appendChild(school);

    })


 
}

getData();