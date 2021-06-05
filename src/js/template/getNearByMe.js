import OpenConexion from "../connection/fech.js";
import State from "./state.js";
import GetCity from "./getInfoCity.js";

const stateLoading = new State();
const Conexion = new OpenConexion();

async function getNearByMe (value) {
  try {
    const data = await Conexion.NearByMe(value);
    const listData = data.list[0];
    console.log(data);

    GetCity(listData.name);

  } catch (error) {
    console.log(error)
  }
}

export default getNearByMe;