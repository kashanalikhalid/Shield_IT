import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'








let userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null

if(userInfoFromStorage===null)
   userInfoFromStorage= sessionStorage.getItem('userInfo')
        ? JSON.parse(sessionStorage.getItem('userInfo'))
        :null

const initialState={
    userLogin: { userInfo: userInfoFromStorage },
}

const reducer= combineReducers({


})


const middleware=[thunk]


const store= createStore(reducer,initialState,composeWithDevTools(
applyMiddleware(...middleware)
))

export default store;
