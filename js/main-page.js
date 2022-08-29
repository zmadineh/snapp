const hamburger = document.querySelector(".mp-hamburger");
const navMneu = document.querySelector(".mp-nav-menu");
const sighUpNewText = document.getElementById("sighUp-child")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMneu.classList.toggle("active");
    sighUpNewText.classList.toggle("active");

    if(list.classList.contains('open'))
        list.classList.remove('open');
    
})

const list = document.getElementById("list");
const listButton = document.querySelector(".mp-d-app-links-title");
const listButtonIcone = document.getElementById("open-close-icon")

/* When the user clicks on the button,
toggle between closing and opening the list content */
listButton.addEventListener("click", () => {
        list.classList.toggle('open');
        listButtonIcone.classList.toggle('fa-angle-up');
        
})











// Close the list menu if the user clicks outside of it
// window.onclick = function(event) {
//     if (!event.target.matches('.mp-hamburger') 
//         && !event.target.matches('.mp-nav-menu') 
//         && !event.target.matches('.mp-header-container')
//         && !event.target.matches('.mp-bar')
//         && !event.target.matches('.mp-d-app-links-list')) {
//         if (navMneu.classList.contains('active')){
//             navMneu.classList.remove('active')
//         }
//         if (list.classList.contains('open')){
//             list.classList.remove('open')
//         }
//     }
//   }