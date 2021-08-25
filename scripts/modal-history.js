var modal = document.querySelector("[data-modal]");
var verifies = document.querySelectorAll("[data-button=verifyHistory]");

verifies.forEach(verify => verify.addEventListener("click", ()=>{
    modal.classList.add("active");
}))

var cancel = document.querySelector("[data-button=fecharModal]");

cancel.addEventListener("click", (event)=>{
    event.preventDefault();
    modal.classList.remove("active");
})

document.addEventListener("keydown", (event)=>{
    if(event.keyCode === 27){
        modal.classList.remove("active");
    }
})