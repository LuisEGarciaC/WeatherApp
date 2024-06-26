import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserState } from "../../types/UserTypes.d";

const initialState: UserState = {
	id: 0,
	name: "",
	username: "",
	email: "",
	isLoading: false,
	userStatus: "not_authenticated",
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
			state.userStatus = "authenticated";
			state.isLoading = false;
			state.errorMessage = null;
			localStorage.setItem("dataUser", JSON.stringify(state)); // Guardar en localStorage
			return state;
		},
		UserLougout: (state) => {
			state = initialState;
			console.log("click")
			localStorage.removeItem("dataUser");
			return state;
		},
		setErrorMessage: (state, action: PayloadAction<string>) => {
			state.errorMessage = action.payload;
		},
		setIsLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = !action.payload;
			
		},
	},
});

export const { setUserLogin, setErrorMessage, setIsLoading, UserLougout } =
	UserSlice.actions;
export default UserSlice.reducer;
