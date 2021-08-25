var change = document.getElementById("switch");
var body = document.querySelector("body");
var dark = localStorage.getItem('dark');

change.addEventListener("click", () => {
    trocaModo();
    // if(event.target.checked) {
    //     body.classList.add("dark");
    // }else {
    //     body.classList.remove("dark");
    // }
})

const trocaModo = () => {
    dark = !dark;
    console.log(dark)
    localStorage.setItem('dark', dark);
    atualizaTela();
}

const atualizaTela = () => {
    dark.value = localStorage.getItem('dark');
    if(dark) {
        body.classList.add("dark");
        change.checked = true;
    }else{
        body.classList.remove("dark");
        // localStorage.removeItem('dark');
    }
}

atualizaTela()