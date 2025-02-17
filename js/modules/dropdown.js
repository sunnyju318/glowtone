export function initDropdownHover(){
  const dropdownLinks = document.querySelectorAll(".dropdown a");
  dropdownLinks.forEach(link => {
    link.addEventListener("mouseover", function () {
      link.style.color = "#36454f";
    });

    link.addEventListener("mouseout", function () {
      link.style.color = "#708090";
    });
  });
}
