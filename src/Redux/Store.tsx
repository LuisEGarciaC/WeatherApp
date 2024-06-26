import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { UserSlice } from "./User/Userslice";



export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

const rootReducer = combineReducers({
	user: UserSlice.reducer,
});

const store = configureStore({
	reducer: rootReducer,
});




export default store;
