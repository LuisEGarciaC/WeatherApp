import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserState } from "../../types/UserTypes.d";

const initialState: UserState = {
	id: 0,
	name: "",
	username: "",
	email: "",
	isLoging: false,
	usarStatus: "not_authenticated",
	errorMessage: null,
	units: "",
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
};

export const UserSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUserLogin: (state, action: PayloadAction<UserState>) => {
			state = action.payload;
			state.units = "metric";
			state.usarStatus = "authenticated";
			state.isLoging = false;
			state.errorMessage = null;
			return state;
		},
		setErrorMessage: (state, action: PayloadAction<string>) => {
			state.errorMessage = action.payload;
		},
	},
});

export const { setUserLogin, setErrorMessage } = UserSlice.actions;
export default UserSlice.reducer;
