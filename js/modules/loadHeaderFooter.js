
import { initDropdownHover } from "dropdown.js"; 

export function loadHeaderFooter() {
  fetch("../partials/header.html") 
    .then(response => response.text())
    .then(data => {
      document.getElementById("header-placeholder").innerHTML = data;
    });

    fetch("../partials/nav.html") 
    .then(response => response.text())
    .then(data => {
      document.getElementById("nav-placeholder").innerHTML = data;
      initDropdownHover(); 
    });

      
  fetch("../partials/footer.html") 
    .then(response => response.text())
    .then(data => document.getElementById("footer-placeholder").innerHTML = data);
};
