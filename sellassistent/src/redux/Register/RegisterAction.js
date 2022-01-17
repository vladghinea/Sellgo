import { CreateAPIEndPoint, ENDPOINTS } from '../../api/Index'
import  {    
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILED,
} from './AuthTypes'
  
export const fetchRegisterRequest = () => {
    return{
        type:  REGISTER_REQUEST
    }
}
export const fetchRegisterSuccess = (data) => {
    return{
        type: REGISTER_SUCCESS,
        payload: data
    }
}
export const fetchRegisterFailure = (error) => {
    return{
        type: REGISTER_FAILED,
        payload: error
    }
}




export const RegisterAuthAction = (userState, history, setErrorHandler) => {
    return async (dispatch) => {
      try { 
        dispatch(fetchRegisterRequest)         
        const res = await CreateAPIEndPoint(ENDPOINTS.REGISTER).create(userState);
        const { data } = res;
        console.log(`Lamine --> fetch register data: ${userState}\n \t and history: ${history}\n \t and errorHandler: ${setErrorHandler}\n \t on ${CreateAPIEndPoint(ENDPOINTS.REGISTER)} with response ${data}`)
        dispatch(fetchRegisterSuccess(data));
        history.push("/");
      } catch (error) {
        if (error.response) {
            dispatch(fetchRegisterFailure(error));
          setErrorHandler({
            hasError: true,
            message: error.response.data.message,
          });
        }
      }
    };
  };
