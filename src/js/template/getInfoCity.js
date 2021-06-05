import OpenConexion from "../connection/fech.js";
import GetMoreInfo from "./moreInfo.js";
import State from "./state.js";

const Conexion = new OpenConexion(); 
const stateLoading = new State(); 

async function GetCity (value) {
  // ENABLE LOADING

  try {
    // GET DATA API

    const data = await Conexion.GetData(value);
    
    const datalist = data.list[0];
    
    GetMoreInfo(data);

    // PRINT DATA 
    datalist.weather.forEach(elem => {
      /* IMAGE TIME */ 
      stateLoading.imageTemp.src = `http://openweathermap.org/img/wn/${elem.icon}@2x.png`;
      /* TYPE TEMP */ 
      stateLoading.typeTemp.textContent = elem.main; 
      // DESCRIPTION TEMP
      stateLoading.descriptionTemp.textContent = elem.description;
    })
    /* NAME CITY */ 
    stateLoading.location.textContent = `${data.city.name}, ${data.city.country}`;
    
    /* TEMP CITY */ 
    stateLoading.degressTemp.textContent = Math.trunc(datalist.main.temp);
    /* PRESSURE */ 
    stateLoading.airPressure.textContent = datalist.main.pressure;
    /* HUMIDITY */ 
    stateLoading.humidity.textContent = datalist.main.humidity;
    /* HUMIDITY BAR */ 
    stateLoading.humidityBar.style.width = `${datalist.main.humidity}%`;
    /* VISIBILITY */
    stateLoading.visibility.textContent = (datalist.visibility / 10000).toFixed(1);
    /*WIND SPEED*/
    stateLoading.windStatus.textContent = datalist.wind.speed;
    /*WIND SPEED COMPASS*/
    stateLoading.windStatusCompass.style.transform = `rotate(${datalist.wind.deg}deg)`;
    /* DATE NOW */
    stateLoading.date.textContent = stateLoading.Date(datalist.dt_txt);
    // END PRINT DATA 

    // DISABLE LOADING
    stateLoading.Loading();
  } catch (error) {
    stateLoading.Loading()
    stateLoading.modal.classList.add("loading");
    console.log("Hubo un error" + error)
  }
}


export default GetCity;