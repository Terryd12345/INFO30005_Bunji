import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

export { getCityData }


function getCityData(){
    const url = `${BASE_URL}/cities`;
    return axios.get(url).then(response => response.data);
}
