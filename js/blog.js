function bl_search_Function() {
    var x = document.getElementsById("bl-search-input");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }