import axios from "axios";
import qs from 'qs';

const API = axios.create({
    baseURL: 'http://localhost:5000/api', 
    headers: {
        "Access-Control-Allow-Origin": "*",
        'Access-Control-Allow-Headers':  'Content-Type, X-Auth-Token, Authorization, Origin',
        'Access-Control-Allow-Methods': ' POST, PUT, GET, PATCH'
    }
});

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`; 
    }
    return req;
});
// FONDS
export const fetchFonds = () => API.get('/fonds');
export const searchFonds = (search, location, category) => API.get(`/fonds?search=${search}&location=${location}&category=${category}`);
export const fetchFondById = (id) => API.get(`/fonds/${id}`);
export const createFond = async (fond) => API.post(`/add-fond`, fond);
// EVENTS
export const fetchEvents = () =>API.get('/events');
export const fetchEventsByFondId = (fondId) =>API.get(`/events/fond/${fondId}`);
export const fetchEventById = (id) => API.get(`/events/${id}`);
export const createEvent = (event, fondId, userId) => API.post(`/events/add-event?fondId=${fondId}&userId=${userId}`, event);
// DONATIONS
export const fetchDonationsByFondId = (fondId) => API.get(`donations/fond/${fondId}`);
export const fetchDonationsByEventId = (eventId) => API.get(`donations/event/${eventId}`);
export const fetchDonationsByUserId = (userId) => API.get(`donations/user/${userId}`);
// AUTH
export const isExists = (email) => API.post(`/users/ifexists?email=${email}`);
export const signIn = (formData) => API.post('/login', formData);
export const signUp = (formData) => API.post('/signup', formData);