
"use strict";


function toogleTabs (){

    const ascend = document.getElementById("ascend");
    const descend = document.getElementById("descend");
    const reset = document.getElementById("reset");

    ascend.onclick = function () {
        let tableBody = document.getElementById("tbody");
        let rowsArray = Array.from(tableBody.children);

        const sortedrows = rowsArray.sort((a, b) => {
            const aValue = Date.parse(a.children[2].innerHTML);
            const bValue = Date.parse(b.children[2].innerHTML);
            
            return aValue > bValue ? 1 : -1;
        });
        while(tableBody.firstChild){
            tableBody.removeChild(tableBody.firstChild)
        }
        tableBody.append(...sortedrows) 
    }

    descend.onclick = function () {
        let tableBody = document.getElementById("tbody");
        let rowsArray = Array.from(tableBody.children);

        const sortedrows = rowsArray.sort((a, b) => {
            const aValue = Date.parse(a.children[2].innerHTML);
            const bValue = Date.parse(b.children[2].innerHTML);
            
            return aValue < bValue ? 1 : -1;
        });
        while(tableBody.firstChild){
            tableBody.removeChild(tableBody.firstChild)
        }
        tableBody.append(...sortedrows) 
    }

    reset.onclick = function () {
        location.href = "./courses.html";
    }

    function appendCourse () {
        let userCourses = JSON.parse(localStorage.getItem("userInputCourses"));

        let tableBody = document.querySelector("#tbody");

        for( let i = 0; i < userCourses.length;i++){
            let newRow = tableBody.insertRow();
            let sNo = tableBody.rows.length;
            
            let cell0 = newRow.insertCell();
            cell0.appendChild(document.createTextNode(sNo++));
            cell0.classList = "sNo";

            let cell1 = newRow.insertCell();
            let nav1 = document.createElement("nav");
            cell1.appendChild(nav1);
            let anchr1 = document.createElement("a");
            nav1.appendChild(anchr1);
            nav1.classList = "nav";
            anchr1.appendChild(document.createTextNode(userCourses[i].cCode));
            anchr1.classList = "nav-link text-dark";
            
            let cell2 = newRow.insertCell();
            let nav2 = document.createElement("nav");
            cell2.appendChild(nav2);
            let anchr2 = document.createElement("a");
            nav2.appendChild(anchr2);
            nav2.classList = "nav";
            anchr2.appendChild(document.createTextNode(userCourses[i].cTitle));
            anchr2.classList = "nav-link text-dark";
            
            let cell3 = newRow.insertCell();
            let cDate = new Date(userCourses[i].cDate)
            cell3.appendChild(document.createTextNode(cDate.getMonth() + "/" + cDate.getDate() + "/" + cDate.getFullYear()));
            
        }
        
    }
    appendCourse();

    function deleteCourse () {
        let courseDelete = JSON.parse(localStorage.getItem("deleteCourses"));
        let tableBody = document.querySelector("#tbody");
        const sNoArr = document.getElementsByClassName("sNo");

        for (let i = 0; i < courseDelete.length; i++){
            for (let j = 0; j < sNoArr.length; j++){
                if(Number(courseDelete[i].sNo) === Number(sNoArr[j].innerHTML)){
                    
                    tableBody.removeChild(sNoArr[j].parentNode);
                }
            }
        }
    }
    deleteCourse ()


    function updateCourse () {
        let courseUpdate = JSON.parse(localStorage.getItem("updateCourses"));
        const sNoArr = document.getElementsByClassName("sNo");
        console.log(courseUpdate[0].sNo)
        

        for (let i = 0; i < courseUpdate.length; i++){
            for (let j = 0; j < sNoArr.length; j++){
                if(Number(courseUpdate[i].sNo) === Number(sNoArr[j].innerHTML)){
                    let row = sNoArr[j].parentNode;
                    
                    row.children[1].firstElementChild.firstElementChild.innerHTML = courseUpdate[i].cCode;
                   
                    row.children[2].firstElementChild.firstElementChild.innerHTML = courseUpdate[i].cName;
                    
                    let stDate = new Date(courseUpdate[i].sDate)
                    let dateFormat = (stDate.getMonth()+1) + "/" + (stDate.getDate()+1) + "/" + stDate.getFullYear()
                    
                    row.children[3].innerHTML = dateFormat ;
                }
            }
        }
    }
    updateCourse ()


   
}

window.onload = toogleTabs;