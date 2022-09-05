const AU__burgerMenu = document.querySelector('.AU__burgerMenu');
const AU__burgerMenuToggle = document.querySelector('.AU__BM');


const BurgerIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>'

const closeIcon = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>'

AU__burgerMenuToggle.addEventListener("click", function (e) {
    AU__burgerMenu.classList.toggle("d-none");
    if (AU__burgerMenu.classList.contains('d-none')) {
        //if menu is close
        AU__burgerMenuToggle.classList.add('fa-bars');
        AU__burgerMenuToggle.classList.remove('fa-xmark');
    } else {
        //if menu is open
        AU__burgerMenuToggle.classList.remove('fa-bars');
        AU__burgerMenuToggle.classList.add('fa-xmark');

    }
});


const wrapper = document.querySelector('.AU__details-wrapper');
const list = document.querySelector(".AU__accordion_menu");
const listButton = document.querySelector(".AU__burgerMenu__footer--text");
const listButtonIcone = document.querySelector(".open-close-icon");


listButton.addEventListener("click", (e) => {
    list.classList.toggle('open');
    listButtonIcone.classList.toggle('fa-angle-down');
    listButtonIcone.classList.toggle('fa-angle-up');
});







