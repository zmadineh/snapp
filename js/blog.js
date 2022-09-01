function bl_search_Function() {
    const x = document.getElementById("bl-search-input");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
    const icon = document.getElementsByClassName(".bl-search-icon")
    if(icon.classList.contains("fa-solid fa-magnifying-glass")){
      icon.classList.replace("fa-regular fa-xmark");
      icon.classList.remove("fa-solid fa-magnifying-glass");
      icon.classList.add("fa-regular fa-xmark");
    }else{
      icon.classList.add("fa-solid fa-magnifying-glass");
    }
    
  }
function bl_hamburger_Function(){
  const x = document.getElementsByClassName(".bl-menu-father");
  if(x.style.display ==="flex"){
    x.style.display = "none";
  }
  else {
    x.style.display = "flex";
}}