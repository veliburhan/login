import { createStore} from "redux";
import { combineReducers } from "redux";    
import authReducer from "../reducers/authReducer";
import categoryReducer from "../reducers/categoryReducer";
import appDataReducer from "../reducers/appDataReducer";



const rootReducers = combineReducers({
    authState : authReducer,
    categoriesState: categoryReducer,
    appDataState:appDataReducer
})


const store=createStore(rootReducers)

export default store