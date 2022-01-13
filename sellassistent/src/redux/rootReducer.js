import ThemeReducer from "./Theme/ThemeReducer";
import UserReducer from "./Users/UserReducer";
import AuthReducer from "./Authentication/AuthReducer";
import AuthErrorReducer from "./Authentication/AuthErrorReducer";
import {combineReducers} from "redux"

const rootReducer = combineReducers({
    themeRedux: ThemeReducer,
    userRedux: UserReducer,
    authRedux: AuthReducer,
    authState: AuthReducer,
    authError: AuthErrorReducer,
})

export default rootReducer
