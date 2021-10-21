"use strict";


function modifyCourse () {
    let coursesArray = [];
    let deleteArray = [];
    let updateArray = [];

    const addCourse = document.getElementById("addCourse");
    addCourse.addEventListener ("click", function (ev) {
        ev.preventDefault();
        let courseObject;
        const courseForm= document.getElementById("courseform");
        const courseCode= document.getElementById("courseCode").value;
        const courseName = document.getElementById("courseName").value;
        const startDate = document.getElementById("courseStartDate").value;
        const feedback = document.getElementById("feedbackDivC");

        if(courseCode === "" || courseName === "" || startDate === ""){
            feedback.innerHTML = "Don't leave blank spaces";
            feedback.style.color = "red";
        } else {
            feedback.innerHTML = "Valid";
            feedback.style.color = "green";
            courseObject = {
            cCode: courseCode,
            cTitle: courseName,
            cDate: startDate,
        }
        
        coursesArray.push(courseObject)
        
        localStorage.setItem("userInputCourses", JSON.stringify(coursesArray));
        console.log(coursesArray)
        }
        
    courseForm.reset();
    });


    const deleteCourse = document.getElementById("deleteCourse");
    deleteCourse.addEventListener("click", function (ev) {
    ev.preventDefault();
    
    let deleteObject;
    const courseForm= document.getElementById("courseform");
    const serialNo = Number(document.getElementById("serialNo").value);
    const courseCode= document.getElementById("courseCode").value;
    const courseName = document.getElementById("courseName").value;
    const startDate = document.getElementById("courseStartDate").value;
    const feedback = document.getElementById("feedbackDivC");
        console.log(serialNo)
    if(!serialNo){
        feedback.innerHTML = "Enter table serial number to delete row";
        feedback.style.color = "red";
    } else {
        feedback.innerHTML = "Valid";
        feedback.style.color = "green";

        deleteObject = {
            sNo: serialNo,
            cCode: courseCode,
            cName: courseName,
            sDate: startDate,
        }
        deleteArray.push(deleteObject);
                
            localStorage.setItem("deleteCourses", JSON.stringify(deleteArray));
            console.log(deleteArray);
        
    }
    
    courseForm.reset();
    });


    const updateCourse = document.getElementById("updateCourse");
    updateCourse.addEventListener("click", function (ev) {
    ev.preventDefault();
    
    let updateObject;
    const courseForm= document.getElementById("courseform");
    const serialNo = Number(document.getElementById("serialNo").value);
    const courseCode= document.getElementById("courseCode").value;
    const courseName = document.getElementById("courseName").value;
    const startDate = document.getElementById("courseStartDate").value;
    const feedback = document.getElementById("feedbackDivC");
        
    if(!serialNo && !courseCode && !courseName && !startDate){
        feedback.innerHTML = "Fill out all available spaces";
        feedback.style.color = "red";
    } else {
        feedback.innerHTML = "Valid";
        feedback.style.color = "green";

        updateObject = {
            sNo: serialNo,
            cCode: courseCode,
            cName: courseName,
            sDate: startDate,
        };

        updateArray.push(updateObject);
                
            localStorage.setItem("updateCourses", JSON.stringify(updateArray));
            console.log(updateArray);
        
    }
    
    courseForm.reset();
    });
}

window.onload = modifyCourse;
