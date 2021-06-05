import Nav from "./template/events.js";
import GetCity from "./template/getInfoCity.js";


document.addEventListener("click", Nav);

window.addEventListener("load", e => {
  GetCity("arequipa");
})