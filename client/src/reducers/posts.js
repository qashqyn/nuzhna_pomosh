import { CREATE_FOND, DELETE_FOND, FETCH_ALL_FONDS, LIKE, UPDATE_FOND, FETCH_ONE_FOND, START_LOADING, END_LOADING, FETCH_ALL_EVENTS, FETCH_ONE_EVENT, CREATE_EVENT, DELETE_EVENT, FETCH_DONATIONS, DONATE } from "../constants/actionTypes";

const postsReducers = (state = { isLoading: true, fonds: [], events: [], fond: null, event: null, donations: null }, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true};
        case END_LOADING:
            return { ...state, isLoading: false};
        case FETCH_ALL_FONDS:
            return { ...state, fonds: action.payload.data};
        case FETCH_ONE_FOND:
            return { ...state, fond: action.payload.data };
        case CREATE_FOND:
            return {...state, fonds: [ ...state.fonds, action.payload.data] };
        case DELETE_FOND:
            return { ...state, fonds : state.fonds.filter((fond) => fond._id !== action.payload._id)};
        
        case FETCH_ALL_EVENTS:
            return { ...state, events: action.payload.data};
        case FETCH_ONE_EVENT:
            return { ...state, event: action.payload.data };
        case CREATE_EVENT:
            return {...state, events: [ ...state.events, action.payload.data], status: action.payload.status };
        case DELETE_EVENT:
            return { ...state, events : state.events.filter((event) => event._id !== action.payload._id)};

        case FETCH_DONATIONS:
            return { ...state, donations: action.payload.data};
        case DONATE:
            return { ...state, status: action.payload.status};
        default:
            return state;
    }
};

export default postsReducers;