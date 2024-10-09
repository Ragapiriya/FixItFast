import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {thunk} from "redux-thunk";

const reducer = combineReducers({});

const store = configureStore({
    reducer, //funtionality- able to change the state
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
   //It allows asynchronous activities [ during api calls]
  });
  export default store;
