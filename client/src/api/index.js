import axios from "axios";

const API = axios.create({baseURL: 'http://localhost:5000/api'});

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`; 
    }
    return req;
});

export const fetchFonds = () => API.get('/fonds');
export const searchFonds = (search, location, category) => API.get(`/fonds?search=${search}&location=${location}&category=${category}`);
export const fetchFondById = (id) => API.get(`/fonds/${id}`);
export const createFond = async (fond) => await API.post(`/add-fond`, fond);