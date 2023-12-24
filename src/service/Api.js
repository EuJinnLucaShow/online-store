import axios from 'axios';

const API_BASE_URL = 'https://assortment-sounds-api.vercel.app/api';

axios.defaults.baseURL = API_BASE_URL;

export const fetchVinils = async () => {
    try {
        const response = await axios.get('/vinils');
        return response.data;
    } catch (error) {
        console.log(error);
    }
}