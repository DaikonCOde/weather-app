import GetCity from "./getInfoCity.js";
import getNearByMe from "./getNearByMe.js";
import State from "./state.js";

const stateLoading = new State();

const btnOpen = document.querySelector(".btn-open");
const navMenu = document.querySelector(".nav-search");
const btnClose = document.querySelector(".close-nav");
const btnSearch = document.querySelector(".btn-search-nav");
const inputSearch = document.querySelector ("#input-search");
const modal = document.querySelector(".modal");
const modalCLose = document.querySelector(".close-modal");
const nearByMe = document.querySelector("#near-by-me");


const Nav = e => {
  // OPEN NAV
  if (e.target == btnOpen) {
    navMenu.classList.add("nav-active");
  }
  // CLOSE NAV
  if (e.target == btnClose) {
    navMenu.classList.remove("nav-active");
  }
  // CLOSE MODAL
  if (e.target == modalCLose) {
    modal.classList.remove("loading");
  }
  // SEARCH CITY IN THE API
  if (e.target == btnSearch) {
    stateLoading.Loading()
    let valueInput = inputSearch.value;
    if (valueInput.length < 1 ) {
      console.log("escribe algo")
    } else {
      GetCity(valueInput);
      navMenu.classList.remove("nav-active");
    }
    inputSearch.value = "";
  }
  // SEARCH NEAR BY BE 
  if (e.target == nearByMe) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        let long = position.coords.longitude.toFixed(2);
        let lat = position.coords.latitude.toFixed(2);
        
        stateLoading.Loading()
        
        let location = `lat=${lat}&lon=${long}`
        
        getNearByMe(location)
      })
    }
  }
}


export default Nav;