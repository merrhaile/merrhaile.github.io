
"use strict";

function toogleTabs (){

     function appendProject () {
        let userProjects = JSON.parse(localStorage.getItem("userInputProjects"));
        console.log(userProjects);

        let tableBody = document.querySelector("#tbody");

        for(let i = 0; i < userProjects.length;i++){
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
            anchr1.appendChild(document.createTextNode(userProjects[i].pTitle));
            anchr1.classList = "nav-link text-dark";
            
            let cell2 = newRow.insertCell();
            let nav2 = document.createElement("nav");
            cell2.appendChild(nav2);
            let anchr2 = document.createElement("a");
            nav2.appendChild(anchr2);
            nav2.classList = "nav";
            anchr2.appendChild(document.createTextNode(userProjects[i].pDifLevel));
            anchr2.classList = "nav-link text-dark p-0";
            
            let cell3 = newRow.insertCell();
            let pDate = new Date(userProjects[i].pDate)
            cell3.appendChild(document.createTextNode(pDate.getMonth() + "/" + pDate.getDate() + "/" + pDate.getFullYear()));
        }
        
        
    }
    appendProject() 

    function deleteProject () {
        let projectDelete = JSON.parse(localStorage.getItem("deleteProject"));
        let tableBody = document.querySelector("#tbody");
        const sNoArr = document.getElementsByClassName("sNo");

        for (let i = 0; i < projectDelete.length; i++){
            for (let j = 0; j < sNoArr.length; j++){
                if(Number(projectDelete[i].sNo) === Number(sNoArr[j].innerHTML)){
                    
                    tableBody.removeChild(sNoArr[j].parentNode);
                }
            }
        }
    }
    deleteProject ()

    function updateProject () {
        let projectUpdate = JSON.parse(localStorage.getItem("updateProjects"));
        const sNoArr = document.getElementsByClassName("sNo");
        

        for (let i = 0; i < projectUpdate.length; i++){
            for (let j = 0; j < sNoArr.length; j++){
                if(Number(projectUpdate[i].sNo) === Number(sNoArr[j].innerHTML)){
                    let row = sNoArr[j].parentNode;
                    console.log(row.children[1].firstElementChild.firstElementChild)
                    row.children[1].firstElementChild.firstElementChild.innerHTML = projectUpdate[i].pTitle;
                   
                    row.children[2].firstElementChild.firstElementChild.innerHTML = projectUpdate[i].pDlevel;
                    
                    let pDate = new Date(projectUpdate[i].pDate)
                    let dateFormat = (pDate.getMonth()+1) + "/" + (pDate.getDate()+1) + "/" + pDate.getFullYear()
                    row.children[3].innerHTML = dateFormat ;
                }
            }
        }
    }
    updateProject ()
  
    const ascendDate = document.getElementById("ascend-date");
    const descendDate = document.getElementById("descend-date");
    const resetDate = document.getElementById("reset-date");

    ascendDate.onclick = function () {
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
    descendDate.onclick = function () {
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
    resetDate.onclick = function () {
        location.href = "./projects.html";
    }


    const ascendDiffcultLevel = document.getElementById("ascend-difLevel");
    const descendDiffcultLevel = document.getElementById("descend-difLevel");
    const resetDiffcultLevel = document.getElementById("reset-difLevel");

    ascendDiffcultLevel.onclick = function () {
        let tableBody = document.getElementById("tbody");
        let rowsArray = Array.from(tableBody.children);

        const sortedrows = rowsArray.sort((a, b) => {
            const aValue = Number(a.children[1].innerHTML);
            const bValue = Number(b.children[1].innerHTML);
            return aValue > bValue ? 1 : -1;
        });
        while(tableBody.firstChild){
            tableBody.removeChild(tableBody.firstChild)
        }
        tableBody.append(...sortedrows) 
    }
    descendDiffcultLevel.onclick = function () {
        let tableBody = document.getElementById("tbody");
        let rowsArray = Array.from(tableBody.children);

        const sortedrows = rowsArray.sort((a, b) => {
            const aValue = Number(a.children[1].innerHTML);
            const bValue = Number(b.children[1].innerHTML);
            return aValue < bValue ? 1 : -1;
        });
        while(tableBody.firstChild){
            tableBody.removeChild(tableBody.firstChild)
        }
        tableBody.append(...sortedrows) 
    }
    resetDiffcultLevel.onclick = function () {
        location.href = "./projects.html";
    }
    


    function slidShow() {
    
        const submitTime = document.getElementById("inputBtn");
        const slides = document.querySelector("#slider").children;
        const slideContainer = document.querySelector("#slider");
        const prevBtn = document.getElementById("prevBtn");
        const nextBtn = document.getElementById("nextBtn");
        let index = 0;
    
        let timerId =  setInterval(function autoSlide (){
            
            if(index < slides.length-1){
                index = index + 1;
            }else {
                index = 0;
            }
            for(let i = 0; i < slides.length;i++){
                slides[i].classList.remove("active");
            }
           
            slides[index].classList.add("active");
            
            prevBtn.onclick = function () {
                move("left");
            }
            nextBtn.onclick = function () {
                move("right");
            }
    
            function move(leftRight){
    
                if(leftRight === "right") {
                    index++;
                    if(index === slides.length){
                        index = 0;
                    }
                } else {
                    if(index === 0){
                        index = slides.length - 1;
                    }else {
                        index--;
                    }
                }
                for(let i = 0; i < slides.length;i++){
                    slides[i].classList.remove("active");
                }
                slides[index].classList.add("active");
    
                clearInterval(timerId);
            }

            

            submitTime.addEventListener("click", function() {
                clearInterval(timerId);
                const setYourTime = document.getElementById("inputInterval");
                const time= Number(setYourTime.value) * 1000;
                
                let timerId2 = setInterval(function() {
                    if(index < slides.length-1){
                        index = index + 1;
                    }else {
                        index = 0;
                    }
                    for(let i = 0; i < slides.length;i++){
                        slides[i].classList.remove("active");
                    }
                   
                    slides[index].classList.add("active");

                    prevBtn.onclick = function () {
                        move("left");
                    }
                    nextBtn.onclick = function () {
                        move("right");
                    }
            
                    function move(leftRight){
            
                        if(leftRight === "right") {
                            index++;
                            if(index === slides.length){
                                index = 0;
                            }
                        } else {
                            if(index === 0){
                                index = slides.length - 1;
                            }else {
                                index--;
                            }
                        }
                        for(let i = 0; i < slides.length;i++){
                            slides[i].classList.remove("active");
                        }
                        slides[index].classList.add("active");
                        
                        // slideContainer.addEventListener("mouseenter", function () {
                        //     clearInterval(timerId2);
                        // });
                       
                        clearInterval(timerId2);
                        
                    }
                    setYourTime.value = null;
                }, time);

                   
                
            });
            // slideContainer.addEventListener("mouseenter", function () {
            //     clearInterval(timerId);
            // });
           
            // slideContainer.addEventListener("mouseleave", function () {
            //     clearInterval(timerId);
            //     setInterval(autoSlide, 3000)
            // }); 
            

        }, 3000);
        
             

    }
    slidShow();

}

window.onload = toogleTabs;