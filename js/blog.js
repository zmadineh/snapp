function bl_search_Function() {
    const x = document.getElementById("bl-search-input");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
    
  }
function bl_hamburger_Function(){
  const x = document.getElementById("bl-menu-father");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
    
}
function bl_submenu_Function(){
  const x = document.getElementsByClassName("bl-submenu");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    
}
window.onscroll = function() {blHeader()};

function blHeader() {
  const y = document.body.scrollTop();
  const x = document.getElementsByClassName("bl-header")
  if (y > 100) {
    x.style.height = "70px";
  }
}

window.onscroll = function() {myFunction()};

function myFunction() {

  if (document.documentElement.scrollTop > 100) {
    document.getElementById("bl-slide").className = "slideUp";
  }
}