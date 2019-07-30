import {combineReducers} from 'redux';

function pageTitle(state={title:"qbc"},action){
    switch(action.type){
        case 'SET_TITLE':
        return action.payload
        default:
        return state;
    }
}
function login(state={loginStatus:false},action){
    switch(action.type){
        case 'LOGIN_IN':
             return Object.assign({},state,{loginStatus:action.payload})
          default:
          return state;
    }
 }
function loginOut(state = {loginStatus:false},action){
    console.log(2222);
   switch(action.type){
       case 'LOGIN_OUT':
            return Object.assign({},state,{loginStatus:action.payload})
         default:
         return state;
   }
}
export default combineReducers({
   pageTitle,
   login,
   loginOut
})