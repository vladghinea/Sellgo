import { CreateAPIEndPoint, ENDPOINTS } from '../../api/Index'

import { FETCH_DEALS_FAILURE, FETCH_DEALS_REQUEST, FETCH_DEALS_SUCCESS } from "./DealTypes"

export const fetchDealsRequest = () => {
    return{
        type: FETCH_DEALS_REQUEST
    }
}
export const fetchDealsSuccess = (deals) => {
    return{
        type: FETCH_DEALS_SUCCESS,
        payload: deals
    }
}
export const fetchDealsFailure = (error) => {
    return{
        type: FETCH_DEALS_FAILURE,
        payload: error
    }
}

export const fetchDeals = () => {
   
    return (dispatch) => {
        dispatch(fetchDealsRequest)
        CreateAPIEndPoint(ENDPOINTS.DEAL).fetchAll()
        .then(response => {
            const deals = response.data;
            dispatch(fetchDealsSuccess(deals))
        })
        .catch(error => {
            const errorMsg = error.message; 
            dispatch(fetchDealsFailure(errorMsg))
        })
    }
}