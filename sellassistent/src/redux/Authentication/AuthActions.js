import { CreateAPIEndPoint, ENDPOINTS } from '../../api/Index'
import  {

    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILED,
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




const RegisterAuthAction = (userState, history, setErrorHandler) => {
    return async (dispatch) => {
      try { 
        dispatch(fetchRegisterRequest)         
        const res = await CreateAPIEndPoint(ENDPOINTS.REGISTER).create(userState);
        const { data } = res;
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





  export const fetchLoginRequest = () => {
    return{
        type:  LOGIN_REQUEST
    }
}
export const fetchLoginSuccess = (data) => {
    return{
        type: LOGIN_SUCCESS,
        payload: data
    }
}
export const fetchLoginFailure = (error) => {
    return{
        type: LOGIN_FAILED,
        payload: error
    }
}

  const LoginAuthAction = (loginState, history, setErrorHandler) => {
    return async (dispatch) => {
      try {
        dispatch(fetchLoginRequest);
        const res = await CreateAPIEndPoint(ENDPOINTS.LOGIN).create(loginState);
        const { data } = res;
        dispatch(fetchLoginSuccess(data));
        history.push("/");
      } catch (error) {
        if (error.response) {
            dispatch(fetchLoginFailure(error));
        }
        setErrorHandler({ hasError: true, message: error.response.data.message });
      }
    };
  };



  export const fetchLogoutRequest = () => {
    return{
        type:  LOGOUT_REQUEST
    }
}
export const fetchLogoutSuccess = (data) => {
    return{
        type: LOGOUT_SUCCESS,
        payload: data
    }
}
export const fetchLogoutFailure = (error) => {
    return{
        type: LOGOUT_FAILED,
        payload: error
    }
}

  const LogOutAuthAction = (history) => {
    return async (dispatch) => {
      try {
        dispatch(fetchLogoutRequest)
        const res = await CreateAPIEndPoint(ENDPOINTS.LOGOUT).fetchAll();
        const { data } = res;
        dispatch(fetchLogoutSuccess(data));
        history.push("/");
      } catch (error) {
        if (error.response) {
            dispatch(fetchLogoutFailure(error));
        }
      }
    };
  };

  export {
    RegisterAuthAction,    
    LogOutAuthAction,
    LoginAuthAction,
  };
  
  

