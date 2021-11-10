// Closes dropdown onclick outside the box
window.hover = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// This toggles the dropdown menu on btn press
function toggleDropdown(dropdown_id) {
  document.getElementById(dropdown_id).classList.toggle("show");
}


// This can be used on article as quicklinks to the actual article
function onArticlePress(elem){
    var title = elem.querySelector("#article_title").innerHTML;
    location.href = title.trim() + ".html";
}