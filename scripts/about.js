"use strict";


function toogleTabs (){
    const home = document.getElementById("homeTab");
    home.onclick = function () {
        location.href = "../index.html";
    }

    const about = document.getElementById("aboutTab");
    about.onclick = function () {
        location.href = "../html-files/about.html";
    }
    const project = document.getElementById("projectsTab");
    project.onclick = function () {
        location.href = "../html-files/projects.html";
    }

    const courses = document.getElementById("coursesTab");
    courses.onclick = function () {
        location.href = "../html-files/courses.html";
    }

}

window.onload = toogleTabs;