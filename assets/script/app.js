import { renderList } from "./renderDropdown.js";

const plusButtons = document.querySelectorAll(".icon-toggle");
const dropdownInfos = document.querySelectorAll(".faq__content");

plusButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    // Primero cerramos todos los dropdowns
    dropdownInfos.forEach((dropdown, dropdownIndex) => {
      if (dropdownIndex !== index) {
        dropdown.classList.remove("show__faq");
      }
    });

    // Luego abrimos o cerramos el dropdown correspondiente
    dropdownInfos[index].classList.toggle("show__faq");
  });
});
