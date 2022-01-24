import ThemeReducer from "./Theme/ThemeReducer";
import UserReducer from "./Users/UserReducer";
import AuthReducer from "./Authentication/AuthReducer";
import AuthErrorReducer from "./Authentication/AuthErrorReducer";
import CompanyReducer from "./Companies/CompanyReducer";
import CustomerReducer from "./Customers/CustomerReducer";
import DealReducer from "./Deals/DealReducer";
import ProductReducer from "./Products/ProductReducer"
import {combineReducers} from "redux"

const rootReducer = combineReducers({
    themeRedux: ThemeReducer,
    userRedux: UserReducer,
    authRedux: AuthReducer,
    authStat: AuthReducer,
    authError: AuthErrorReducer,
    companiesRedux: CompanyReducer,
    customersRedux: CustomerReducer,
    dealsRedux: DealReducer,
    productsRedux: ProductReducer
})

export default rootReducer
