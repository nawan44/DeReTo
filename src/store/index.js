// import rootReducer from '../reducers/';  
import thunk from "redux-thunk";
import { reducer } from "../reducer";
// import { createStore, applyMiddleware } from "reduxjs/toolkit";
import { createStore, applyMiddleware } from "@reduxjs/toolkit";


/*Create a function called configureStore */

const store = createStore(reducer, applyMiddleware(thunk));


export default store