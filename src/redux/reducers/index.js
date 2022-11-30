import {GET_COIN,SINGLE_COIN} from '../action/index'
const intialState ={
    lists:[]
}

function userReducer(state=intialState,{type,payload}){
    switch(type){
        case GET_COIN:
            return { ...state, lists:payload };
        case SINGLE_COIN:
            console.log("payload",payload);
            return { ...state, lists:payload };
            default:
                return state;
    }
}


export default userReducer;