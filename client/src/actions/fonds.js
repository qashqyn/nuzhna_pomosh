import { CREATE, END_LOADING, FETCH_ALL, START_LOADING } from "../constants/actionTypes";
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

export const createFond = (fond) => async (dispatch) => {
    try {
        const {data} = await api.createFond(fond);

        dispatch({type: CREATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}
