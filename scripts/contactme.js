


function onloadEventHandler() {
    let contactsArray = [];
    const myform = document.getElementById("form");
    const submitButton = document.getElementById("submit");

    submitButton.addEventListener("click", function (ev){
        ev.preventDefault();
        let contactObject;
        const name = document.getElementById("fulname").value;
        const email = document.getElementById("email").value;
        const textarea = document.getElementById("textarea").value;
        const feedback = document.getElementById("feedbackContact");
        
        if(!(name.length > 4 && name.length < 10)){
            feedback.innerHTML = "Name length should be > 4 and < 10";
            feedback.style.color = "red";
        } else {
            feedback.innerHTML = "Valid";
            feedback.style.color = "green";
            contactObject = {
                contName: name,
                contEmail: email,
                contComment: textarea,
            };

            contactsArray.push(contactObject)
        
            localStorage.setItem("Contacts", JSON.stringify(contactsArray));
            console.log(contactsArray)
            
    
        }
        
        

        


        myform.reset();
    })
}

window.onload = onloadEventHandler;