import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import reservationsReducer from "./slices/reservationsSlice";
import usersReducer from "./slices/usersSlice";

const reducer = combineReducers({
  reservationsState: reservationsReducer,
  usersState: usersReducer,
});
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
