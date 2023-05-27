
const initialState={
    user:null
}


const appDataReducer =(state=initialState,action)=>{
    switch (action.type) {
        case "set_app_data": 
        console.log("set_app_data çalıştı")
        return {
            ...state,
            user:action.payload.user
        }

        case "remove_apdata":
            return{
                ...state,
                user:null
            }
         
        default:   
        return state;
    }
}

export default appDataReducer