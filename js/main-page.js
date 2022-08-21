const hamburger = document.querySelector(".hamburger");
const navMneu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMneu.classList.toggle("active");
})