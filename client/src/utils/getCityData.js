import axios from "axios";

const BASE_URL = "http://localhost:5000";


function getCityData(){
    const url = `/cities`;
    return axios.get(url).then(response => response.data);
}
export { getCityData }