import { CREATE, END_LOADING, FETCH_ALL, FETCH_ONE, START_LOADING } from "../constants/actionTypes";
import * as api from '../api';

export const getFonds = () => async(dispatch) => {
    try {
        dispatch({type: START_LOADING});
        const { data } = await api.fetchFonds();

        dispatch({type: FETCH_ALL, payload: data});
        dispatch({type: END_LOADING});
    } catch (error) {
        console.log(error);
    }
}

export const searchFonds = (search, location, category) => async(dispatch) => {
    try {
        dispatch({type: START_LOADING});
        const { data } = await api.searchFonds(search, location, category);

        dispatch({type: FETCH_ALL, payload: data});
        dispatch({type: END_LOADING});
    } catch (error) {
        console.log(error);
    }
}

export const createFond = (fond) => async (dispatch) => {
    try {
        const {data} = await api.createFond(fond);

        dispatch({type: CREATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const getFondById = (id) => async(dispatch) => {
    try {
        dispatch({type: START_LOADING});
        const { data } = await api.fetchFondById(id);

        dispatch({type: FETCH_ONE, payload: data});
        dispatch({type: END_LOADING}); 
    } catch (error) {
        console.log(error);
    }
}