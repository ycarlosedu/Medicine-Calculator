var modal = document.querySelector(".modal__wrapper");
var verify = document.querySelectorAll(".main__infos-button-verify.history");

for (var i = 0; i < verify.length; i++) {
    verify[i].addEventListener("click", ()=>{
        modal.classList.add("active");
    })
};

var cancel = document.querySelector(".modal-cancel");

cancel.addEventListener("click", (event)=>{
    event.preventDefault();
    modal.classList.remove("active");
})

document.addEventListener("keydown", (event)=>{
    if(event.keyCode === 27){
        modal.classList.remove("active");
    }
})