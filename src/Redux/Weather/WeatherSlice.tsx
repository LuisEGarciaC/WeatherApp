import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { WeatherTypes } from "../../types/WeatherTypes.d";
import { OpenWatherTypes } from "../../types/OpenWeatherYpes";

// const initialState: WeatherTypes = {
// 	queryCost: 0,
// 	latitude: 0,
// 	longitude: 0,
// 	resolvedAddress: "",
// 	address: "",
// 	timezone: "",
// 	tzoffset: 0,
// 	days: [],
// 	stations: {},
// 	error: false,
// 	errorMessage: "",
// 	isLoading: false,
// };

const initialState: OpenWatherTypes = {
	coord: {
		lat: 0,
		lon: 0,
	},
	weather: [
		{
			id: 0,
			main: "",
			description: "",
			icon: "",
		},
	],
	base: "",
	main: {
		temp: 0,
		feels_like: 0,
		temp_min: 0,
		temp_max: 0,
		pressure: 0,
		humidity: 0,
		sea_level: 0,
		grnd_level: 0,
	},
	visibility: 0,
	wind: {
		speed: 0,
		deg: 0,
		gust: 0,
	},
	clouds: {
		all: 0,
	},
	dt: 0,
	sys: {
		country: "",
		sunrise: 0,
		sunset: 0,
	},
	timezone: 0,
	id: 0,
	name: "",
	cod: 0,
	error: null,
	errorMessageWeather: null,
	isLoading: false,
	HourlyWeather: [],
	weeklyWeather: [],
};

export const WeatherSlice = createSlice({
	name: "Weather",
	initialState,
	reducers: {
		getforContry: (state, action: PayloadAction<OpenWatherTypes>) => {
			state = action.payload;
			state.isLoading = false;
			state.error = false;
			state.errorMessageWeather = null;
			return state;
		},
		getHourlyWather: (state, action: PayloadAction<OpenWatherTypes["HourlyWeather"]>) => {
			state.HourlyWeather = action.payload;
			state.isLoading = false;
			state.error = false;
			state.errorMessageWeather = null;

			return state;
		},
		getConcurrentWeekWeather: (state, action: PayloadAction<OpenWatherTypes["weeklyWeather"]>) => {
			state.weeklyWeather = action.payload;
			state.isLoading = false;
			state.error = false;
			state.errorMessageWeather = null;
			return state;
		},
		setErrorMessage: (state, action: PayloadAction<string | null>) => {
			state.errorMessageWeather = action.payload;
			return state;
		},
	},
});

export const { getforContry, getHourlyWather, getConcurrentWeekWeather, setErrorMessage } =
	WeatherSlice.actions;
export default WeatherSlice.reducer;
