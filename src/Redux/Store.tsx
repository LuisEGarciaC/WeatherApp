import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { UserSlice } from "./User/Userslice";
import {WeatherSlice} from "./Weather/WeatherSlice";



export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

const rootReducer = combineReducers({
	userInformation: UserSlice.reducer,
	weatherInformation: WeatherSlice.reducer,
});

const store = configureStore({
	reducer: rootReducer,
});




export default store;
