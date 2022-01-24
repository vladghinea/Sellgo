import { CreateAPIEndPoint, ENDPOINTS } from '../../api/Index'

import { FETCH_CUSTOMERS_FAILURE, FETCH_CUSTOMERS_REQUEST, FETCH_CUSTOMERS_SUCCESS } from "./CustomerTypes"

export const fetchCustomersRequest = () => {
    return{
        type: FETCH_CUSTOMERS_REQUEST
    }
}
export const fetchCustomersSuccess = (customers) => {
    return{
        type: FETCH_CUSTOMERS_SUCCESS,
        payload: customers
    }
}
export const fetchCustomersFailure = (error) => {
    return{
        type: FETCH_CUSTOMERS_FAILURE,
        payload: error
    }
}

export const fetchUsers = () => {
   
    return (dispatch) => {
        dispatch(fetchCustomersRequest)
        CreateAPIEndPoint(ENDPOINTS.CUSTOMER).fetchAll()
        .then(response => {
            const customers = response.data;
            dispatch(fetchCustomersSuccess(customers))
        })
        .catch(error => {
            const errorMsg = error.message; 
            dispatch(fetchCustomersFailure(errorMsg))
        })
    }
}