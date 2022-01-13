import ThemeReducer from "./Theme/ThemeReducer";
import UserReducer from "./Users/UserReducer";
import loginReducer from "./Login/LoginReducer";
import {combineReducers} from "redux"

const rootReducer = combineReducers({
    themeRedux: ThemeReducer,
    userRedux: UserReducer,
    loginRedux: loginReducer,
})

export default rootReducer
