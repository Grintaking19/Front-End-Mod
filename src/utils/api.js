import axios from "axios";

export async function fetchData(endpoint, isProtected = false) {
    try {
        let url = `${process.env.REACT_APP_API_DOMAIN}${endpoint}`;
        // Add auth token to request header
        let headers = {};
        if (isProtected) {
            headers = {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzQ0NWU4YWJiZTliNmY4MTcyZjQyMyIsImlhdCI6MTY4MTUxMjg2MiwiZXhwIjoxNjg5Mjg4ODYyfQ.8mzpRYDPonf0cV8zJrpxLI4q6Sb8xtgJUPRK4VUW9mI",
            };
        }
        let response = await axios.get(url, { headers });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}