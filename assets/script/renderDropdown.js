// importar data
import {faqData} from "./data.js";
// capturar elementos
const dropdownList = document.querySelector("#items-faq");


// Renderizar lista FAQ

export const renderList = faqData
  .map(
    (element) =>
      `
      <li class="faq__item ">
     <h3 class="faq__title">
         <button class="btn__faq btn__faq-1">
             <span>${element.title}</span>
             <i id="icon-toggle-1" class="icon-toggle ri-add-fill"></i>
         </button>
     </h3>

     <div class="faq__content ">
         <p class="faq__description">
            ${element.content}
         </p>

     </div>
     </li>
     `
  ).join(" ") ;

dropdownList.innerHTML = renderList;