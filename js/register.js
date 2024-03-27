const usernames = []


document.getElementById("inputPassword").addEventListener("submit", (event) => {


    const password = document.getElementById("Password").value
    const confirmPassword = document.getElementById("ConfirmPassword").value
    const passwordAlert = document.getElementById("passwordAlert");

    if(password != confirmPassword){
        event.preventDefault();
        passwordAlert.style.display = "block";
    }
    
});