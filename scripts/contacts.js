"use strict";



// let tableBody = document.getElementById("table1").getElementsByTagName("tbody")[0];
            // let row = tableBody.insertRow();

            // let cell1 = row.insertCell();
            // cell1.appendChild(document.createTextNode(name.value));
            // let cell2 = row.insertCell();
            // cell2.appendChild(document.createTextNode(email.value));
            // let cell3 = row.insertCell();
            // cell3.appendChild(document.createTextNode(textarea.value));

function appendContacts () {
    let myContactsArray =  JSON.parse(localStorage.getItem("Contacts"));
    console.log(myContactsArray)

    let tableBody = document.querySelector("#tbody");

    for( let i = 0; i < myContactsArray.length;i++){
        let newRow = tableBody.insertRow();

        let cell1 = newRow.insertCell();
        cell1.appendChild(document.createTextNode(myContactsArray[i].contName));

        let cell2 = newRow.insertCell();
        cell2.appendChild(document.createTextNode(myContactsArray[i].contEmail));
            
        let cell3 = newRow.insertCell();
        cell3.appendChild(document.createTextNode(myContactsArray[i].contComment));
    }
    

console.log(myContactsArray)

}


window.onload = appendContacts;