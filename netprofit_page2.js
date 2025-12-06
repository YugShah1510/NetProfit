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


document.addEventListener("DOMContentLoaded", function() {
    const passwordInput = document.getElementById("password");


  
    const capsLockWarning = document.createElement("p");
    capsLockWarning.textContent = "⚠️ Caps Lock is ON";
    capsLockWarning.style.color = "red";
    capsLockWarning.style.fontSize = "12px";
    capsLockWarning.style.marginTop = "5px";
    capsLockWarning.style.display = "none"; 

    // Append warning below password input
    passwordInput.parentNode.appendChild(capsLockWarning);

    // Function to check Caps Lock
    function checkCapsLock(event) {
        if (event.getModifierState && event.getModifierState("CapsLock")) {
            capsLockWarning.style.display = "block"; // Show warning
        } else {
            capsLockWarning.style.display = "none"; // Hide warning
        }
    }

    // Listen for keypress, keydown, and keyup events
    passwordInput.addEventListener("keydown", checkCapsLock);
    passwordInput.addEventListener("keyup", checkCapsLock);
    passwordInput.addEventListener("keypress", checkCapsLock);
});