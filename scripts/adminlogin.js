"use strict"

function adminLogin() {

    const submit = document.getElementById("adminLogin");

    submit.addEventListener("click", function () {
        const username= document.getElementById("adminUser");
        const password = document.getElementById("adminPassword");
        const feedback = document.getElementById("loginValidate");

        if(username.value === "myUser" && password.value === "myPassword"){
            location.href = "./admindashb.html"
            feedback.innerHTML = "valid";
            feedback.style.color = "green"
        }else {
            feedback.innerHTML = "wrong credentails. Try again.";
            feedback.style.color = "red"
        }
    });
    
}

window.onload = adminLogin;