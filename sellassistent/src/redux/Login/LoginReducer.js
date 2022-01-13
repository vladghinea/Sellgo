import { MAKE_LOGIN } from "./LoginTypes"

const initialState = {

        email: "user@email.com",
        last_name: "guest", 
        credentials: { }    
}

const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case MAKE_LOGIN: return {
            ...state,
            last_name: "" ,
            email: "",
            credentials: "",
        }
        default: return state
    }
}

export default loginReducer