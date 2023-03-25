import axios from "axios";

export async function fetchData(endpoint) {
    try {
        let url = `${process.env.REACT_APP_API_DOMAIN}${endpoint}`;
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}