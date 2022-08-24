const hamburger = document.querySelector(".mp-hamburger");
const navMneu = document.querySelector(".mp-nav-menu");
const sighUpNewText = document.getElementById("sighUp-child")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMneu.classList.toggle("active");
    sighUpNewText.classList.toggle("active");
    
})

const list = document.getElementById("list");
const listButton = document.querySelector(".mp-open-list-button");

listButton.addEventListener("click", () => {
        list.classList.toggle('open');
        
})