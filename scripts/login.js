let user = document.getElementById("input-user");
let pass = document.getElementById("input-pass");
let logButton = document.querySelector("[data-button=login]");
let error = document.querySelector(".error");

logButton.addEventListener("click", function(event) {
    if(user.value != "admin" && pass.value != "admin"){
        event.preventDefault();
        alert("Por favor, tente com login e senha: admin")
        error.classList.remove("invisible");
    }
})