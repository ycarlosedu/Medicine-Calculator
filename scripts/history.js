var pacientHistory = document.querySelector("[data-history]");

var verifyHistory = document.querySelector("[data-button=history]");

verifyHistory.addEventListener("click", (event)=>{
    event.preventDefault();
    pacientHistory.classList.add("active");
});