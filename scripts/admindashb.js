"use strict"

function adminDash() {
    
    let projectArray = [];
    

    const logout = document.getElementById("logout");
    logout.addEventListener("click", function () {
        location.href = "./adminlogin.html";
    });


   
    const addProject = document.getElementById("addproject");
    addProject.addEventListener ("click", function (ev) {
        ev.preventDefault();

        let projectObject;
        const projectForm= document.getElementById("projectform");
        const projectTitle= document.getElementById("projectTitle").value;
        const projectDifctLevel = document.getElementById("projectDifctLevel").value;
        const projectDate = document.getElementById("projectDate").value;
        const feedback = document.getElementById("feedbackDivP");

        if(projectForm === "" || projectTitle === "" || projectDate === ""){
            feedback.innerHTML = "Don't leave blank spaces";
            feedback.style.color = "red";
        } else {
            feedback.innerHTML = "Valid";
            feedback.style.color = "green";
            projectObject = {
                    pTitle: projectTitle,
                    pDifLevel: projectDifctLevel,
                    pDate: projectDate,
                }
                
                projectArray.push(projectObject);
                
                localStorage.setItem("userInputProjects", JSON.stringify(projectArray));
                console.log(projectArray);
        }
        
        projectForm.reset();
    });
   

    const deleteCourse = document.getElementById("deleteCourse");
    deleteCourse.addEventListener("click", function (ev) {
    ev.preventDefault();
    
    let deleteObject;
    const courseForm= document.getElementById("courseform");
    const serialNo = Number(document.getElementById("serialNo").value);
    const feedback = document.getElementById("fbDivC");
        console.log(serialNo)
    if(serialNo === ""){
        feedback.innerHTML = "Enter serial number to delete row";
        feedback.style.color = "red";
    } else {
        feedback.innerHTML = "Valid";
        feedback.style.color = "green";

        deleteObject = {
            sNo: serialNo,
        }
        deleteArray.push(deleteObject);
                
            localStorage.setItem("userInputProjects", JSON.stringify(deleteArray));
            console.log(deleteArray);
        
    }
    
    courseForm.reset();
    });
   
}

window.onload = adminDash;