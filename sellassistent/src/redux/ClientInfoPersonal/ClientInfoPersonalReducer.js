import axios from "axios";
import {

    CREATE_CLIENTINFOPERSONAL_SUCCESS,
    UPDATE_CLIENTINFOPERSONAL_SUCCESS,
    DELETE_CLIENTINFOPERSONAL_SUCCESS,
    FETCH_CLIENTINFOPERSONAL_SUCCESS,
    FETCH_CLIENTINFOPERSONAL_REQUEST,
    FETCH_CLIENTINFOPERSONAL_FAILURE
} from "./ClientInfoPersonalTypes";

const authState = {
    isLoggedIn: false,
    infoprofessional: {
        id: "",
        title: "",       
        details: "",
    },
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CLIENTINFOPERSONAL_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_CLIENTINFOPERSONAL_SUCCESS:
            return {
                loading: true,
                infoprofessional: action.payload,
                error: "",
            };
        case FETCH_CLIENTINFOPERSONAL_FAILURE:
            return {
                loading: true,
                infoprofessional: [],
                error: action.payload,
            };
        case CREATE_CLIENTINFOPERSONAL_SUCCESS:
            return [...state, payload];

        case UPDATE_CLIENTINFOPERSONAL_SUCCESS:
            return [...state, payload];

        case DELETE_CLIENTINFOPERSONAL_SUCCESS:
            return [...state, payload];

        default:
            return state;
    }
};

export default reducer;


