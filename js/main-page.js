const hamburger = document.querySelector(".mp-hamburger");
const navMneu = document.querySelector(".mp-nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMneu.classList.toggle("active");
})