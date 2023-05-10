import axios from "axios";

export async function fetchData(endpoint, isProtected = false) {
    try {
        let url = `${process.env.REACT_APP_API_DOMAIN}${endpoint}`;
        // Add auth token to request header
        let headers = {};
        if (isProtected) {
            headers = {
                Authorization: `Bearer ${localStorage.getItem('user')}`,
            };
        }
        let response = await axios.get(url, { headers });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function postData(endpoint, body, isProtected = false) {
    try {
        let url = `${process.env.REACT_APP_API_DOMAIN}${endpoint}`;
        // Add auth token to request header
        let headers = {};
        if (isProtected) {
            headers = {
                Authorization: `Bearer ${localStorage.getItem('user')}`,
            };
        }
        let response = await axios.post(url, body, { headers });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function patchData(endpoint, body, isProtected = false) {
    try {
        let url = `${process.env.REACT_APP_API_DOMAIN}${endpoint}`;
        // Add auth token to request header
        let headers = {};
        if (isProtected) {
            headers = {
                Authorization: `Bearer ${localStorage.getItem('user')}`,
            };
        }
        let response = await axios.patch(url, body, { headers });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


export function authHeader() {
    const user = localStorage.getItem('user');
    if (user) {
        return { token: `${user}` };
    } else {
        return {};
    }
}