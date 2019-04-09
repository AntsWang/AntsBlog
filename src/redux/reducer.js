import {combineReducers} from 'redux';

function pageTitle(state={title:"qbc"},action){
    switch(action.type){
        case 'SET_TITLE':
        return action.payload
        default:
        return state;
    }
}
export default combineReducers({
   pageTitle
})