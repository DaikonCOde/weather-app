import State from "./state.js";

const dateState = new State();

async function GetMoreInfo (listData ) {
  let data = listData.list.filter( (e, index) => index % 8 == 0 ).splice(1, 6);
  const lastDayContainer = document.querySelector(".last-day-container");
  lastDayContainer.textContent = '';
  data.forEach(elem => {
    // get day api
    const date = dateState.Date(elem.dt_txt)
    
    let container = document.createElement("div");
    container.className = "last-day";
    
    let dataName = document.createElement("span")
    dataName.className = "date-name";
    dataName.textContent = date;

    let imageDate = document.createElement("img")
    imageDate.className = "image-date";
    imageDate.src = `http://openweathermap.org/img/wn/${elem.weather[0].icon}@2x.png`

    let nameTime = document.createElement("span");
    nameTime.className = "description-time";
    nameTime.textContent = elem.weather[0].description;

    let containerMinMax = document.createElement("div")
    containerMinMax.className = "container-min-max";
    
    
    let maxTemp = document.createElement("span")
    maxTemp.className = "max-temp-last-day"
    maxTemp.textContent = `${elem.main.temp_max.toFixed()}°C`;
    
    let minTemp = document.createElement("span")
    minTemp.className = "min-temp-last-day"
    minTemp.textContent = `${elem.main.temp_min.toFixed()}°C`;

    containerMinMax.append(maxTemp, minTemp);
    container.append(dataName, imageDate,nameTime, containerMinMax)

    lastDayContainer.append(container);
  });
}

export default GetMoreInfo;