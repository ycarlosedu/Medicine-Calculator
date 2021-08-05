var pacientHistory = document.querySelector(".main__history");

var verifyHistory = document.querySelector(".main__infos-button-verify");

verifyHistory.addEventListener("click", (event)=>{
    event.preventDefault();
    pacientHistory.classList.add("active");
});