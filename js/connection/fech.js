

class OpenConexion {
  constructor () {
    this.urlAPI = {
      baseURL: "https://api.openweathermap.org/data/2.5/",
      parameters: "&units=metric&lang=es&appid=373090a3c994dd0879e7ee241a9d6848",
    };
    this.typeSearch = {
      find: "find?",
      name: "forecast?q="
    }
  }
  async GetData(parameters) {
    let URL = `${this.urlAPI.baseURL}${this.typeSearch.name}${parameters}${this.urlAPI.parameters}`;
    try {
      const response = await fetch(URL);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error)
    }
  }
  async NearByMe(parameters) {
    let URL = `${this.urlAPI.baseURL}${this.typeSearch.find}${parameters}${this.urlAPI.parameters}`
    try {
      const response = await fetch(URL);
      const data = response.json();
      return data;
    } catch (error) {
      console.log(error)
    }
  }
}


export default OpenConexion;