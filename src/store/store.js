import { createStore} from "redux";
import { combineReducers } from "redux";    
import authReducer from "../reducers/authReducer";
import categoryReducer from "../reducers/categoryReducer";



const rootReducers = combineReducers({
    authStore : authReducer,
    categoriesStore: categoryReducer
})


const store=createStore(rootReducers)

export default store