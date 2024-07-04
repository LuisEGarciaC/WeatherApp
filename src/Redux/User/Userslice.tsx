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
			console.log("click");
			localStorage.removeItem("dataUser");
			return state;
		},
		userRegister: (state, action: PayloadAction<UserState>) => {
			// state = action.payload;
			state.id = action.payload.id;
			state.name = action.payload.name;
			state.username = action.payload.username;
			state.email = action.payload.email;
			state.units = "metric";
			state.address.city = action.payload.address.city;
			state.address.street = action.payload.address.street;
			state.address.suite = action.payload.address.suite;
			state.address.zipcode = action.payload.address.zipcode;
			state.address.geo.lat = action.payload.address.geo.lat;
			state.address.geo.lng = action.payload.address.geo.lng;
			state.phone = action.payload.phone;
			state.website = action.payload.website;
			state.userStatus = "authenticated";
			state.isLoading = false;
			state.errorMessage = null;
			localStorage.setItem("dataUser", JSON.stringify(state));
			return state;
		},
		userUpdate: (state, action: PayloadAction<UserState>) => {
			state = action.payload;
			localStorage.setItem("dataUser", JSON.stringify(state));
			return state;
		},
		userDelte: (state) => {
			localStorage.removeItem("dataUser");
			return (state = initialState);
		},
		setErrorMessage: (state, action: PayloadAction<string>) => {
			state.errorMessage = action.payload;
		},
		setIsLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = !action.payload;
		},
	},
});

export const {
	setUserLogin,
	setErrorMessage,
	setIsLoading,
	UserLougout,
	userRegister,
	userUpdate,
	userDelte,
} = UserSlice.actions;
export default UserSlice.reducer;
