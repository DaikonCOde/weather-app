class State {
  constructor () {
    this.overlay = document.querySelector(".overlay");
    this.degressTemp = document.querySelector(".degress-temp");
    this.typeTemp = document.querySelector(".type-temp");
    this.imageTemp = document.querySelector(".image-temp");
    this.location = document.querySelector(".time-location");
    this.modal = document.querySelector(".modal");
    this.date = document.querySelector(".time-date");
    this.windStatus = document.querySelector(".windStatus-value");
    this.windStatusCompass = document.querySelector(".compass-icon");
    this.humidity = document.querySelector(".humidity-value");
    this.visibility = document.querySelector(".visibility-value");
    this.airPressure = document.querySelector(".air-pressure-value");
    this.humidityBar = document.querySelector(".humidity-bar");
    this.descriptionTemp = document.querySelector(".description-temp");
  }
  Loading () {
    this.overlay.classList.toggle("loading");
  }

  Date (valueDate) {
    const date = new Date(valueDate);
    return date.toDateString().slice(0, 11);
  }
}

export default State;