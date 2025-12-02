const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");
emailInput.addEventListener("input",function(){
    if(emailInput.value.includes("@")){
        emailError.textContent = "";
    }
    else{
        emailError.textContent = "Invalid Email!";
    }
});