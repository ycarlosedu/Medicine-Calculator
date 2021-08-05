var change = document.querySelector("#switch");
var body = document.querySelector("body");

change.addEventListener("click", (event) => {
    console.log("trocou");
    if(event.target.checked) {
        console.log("checked");
        body.classList.add("dark");
    }else {
        body.classList.remove("dark");
    }
})