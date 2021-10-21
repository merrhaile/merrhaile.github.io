"use strict";


function modifyProject () {
    let projectArray = [];
    let deleteArray = [];
    let updateArray = [];

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

    const deleteProject = document.getElementById("deleteProject");
    deleteProject.addEventListener("click", function (ev) {
        ev.preventDefault();
        
        let deleteObject;
        const projectForm= document.getElementById("projectform");
        const serialNo = Number(document.getElementById("serialNo").value);
        const projectTitle= document.getElementById("projectTitle").value;
        const projectDifctLevel = document.getElementById("projectDifctLevel").value;
        const projectDate = document.getElementById("projectDate").value;
        const feedback = document.getElementById("feedbackDivP");
            console.log(serialNo)
        if(!serialNo){
            feedback.innerHTML = "Enter table serial number to delete row";
            feedback.style.color = "red";
        } else {
            feedback.innerHTML = "Valid";
            feedback.style.color = "green";

            deleteObject = {
                sNo: serialNo,
                pTitle: projectTitle,
                pDlevel: projectDifctLevel,
                pDate: projectDate,
            }
            deleteArray.push(deleteObject);
                    
                localStorage.setItem("deleteProject", JSON.stringify(deleteArray));
                console.log(deleteArray);
            
        }
        
        projectForm.reset();
        });


    const updateProject = document.getElementById("updateProject");
    updateProject.addEventListener("click", function (ev) {
    ev.preventDefault();
    
    let updateObject;
    const projectForm= document.getElementById("projectform");
    const serialNo = Number(document.getElementById("serialNo").value);
    const projectTitle= document.getElementById("projectTitle").value;
    const projectDifctLevel = document.getElementById("projectDifctLevel").value;
    const projectDate = document.getElementById("projectDate").value;
    const feedback = document.getElementById("feedbackDivP");
        
    if(!serialNo && !projectTitle && !projectDifctLevel && !projectDate){
        feedback.innerHTML = "Fill out all available spaces";
        feedback.style.color = "red";
    } else {
        feedback.innerHTML = "Valid";
        feedback.style.color = "green";

        updateObject = {
            sNo: serialNo,
            pTitle: projectTitle,
            pDlevel: projectDifctLevel,
            pDate: projectDate,
        };

        updateArray.push(updateObject);
                
            localStorage.setItem("updateProjects", JSON.stringify(updateArray));
            console.log(updateArray);
        
    }
    
    projectForm.reset();
    });


}

window.onload = modifyProject;