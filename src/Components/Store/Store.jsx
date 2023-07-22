import {createStore} from "redux";

const emailid = "emailid";
const password = "password";

export const setEmailid = (email) => (
    {
        type: emailid,
        email,
    }
)

export const setPassword = (evtpassword) =>(
    {
        type: password,
        evtpassword,
    }
)

const initialState = {
    inputemail: "",
    inputpassword: "",
}

const loginReducer = (state=initialState, action) => {
    if(action.type === emailid){
        return{
            ...state,
            inputemail: action.email,
        }
    }
    if(action.type === password){
        return{
            ...state,
            inputpassword: action.evtpassword
        }
    }
    return state;
}

const Store = createStore(loginReducer);
export default Store;