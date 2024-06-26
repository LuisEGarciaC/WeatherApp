import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserState } from "../../types/UserTypes.d";

const initialState: UserState = {
	id: 0,
	name: "",
	username: "",
	email: "",
	address: {
		street: "",
		suite: "",
		city: "",
		zipcode: "",
		geo: {
			lat: "",
			lng: "",
		},
	},
	phone: "",
	website: "",
	company: {
		name: "",
		catchPhrase: "",
		bs: "",
	},
	userlogin: {
		isLoging: false,
		usarStatus: "not_authenticated",
		errorMessage: null,
		units: "",
	},
};

export const UserSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUserLogin: (state, action: PayloadAction<UserState>) => {
			state = action.payload;
			state.userlogin.isLoging = true;
			state.userlogin.usarStatus = "authenticated";
			state.userlogin.errorMessage = null;
			state.address.city = "venezuela";
			state.userlogin.units = "metric";
		},
	},
});

export const { setUserLogin } = UserSlice.actions;
export default UserSlice.reducer;
