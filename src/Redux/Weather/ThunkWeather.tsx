import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getConcurrentWeekWeather, getforContry, getHourlyWather } from "./WeatherSlice";
import { setErrorMessage } from "../User/Userslice";
import { API_KEY, BASE_URL } from "../../helpers/Const";

export const thunkWeather: any = createAsyncThunk(
	"weatherThunk/getInformation",
	async (WeatherCity: string, { dispatch, rejectWithValue }) => {
		try {
			await axios
				.get(
					`https://api.openweathermap.org/data/2.5/weather?q=${WeatherCity}&units=metric&appid=${API_KEY}`
				)
				.then((res) => {
					const respuesta = res;

					dispatch(getforContry(respuesta.data));
				})
				.catch((err) => {
					console.log(err.message);

					dispatch(setErrorMessage("Problemas con la pagina de la API"));
				});
		} catch (error) {
			throw rejectWithValue("Error no se encuentra informacion");
		}
	}
);

export const HourlyWeather: any = createAsyncThunk(
	"weatherThunk/getHourlyInformation",
	async (
		coord: { lat: number; lon: number },
		{ dispatch, rejectWithValue }
	) => {
		try {
			await axios
				.get(
					`https://api.openweathermap.org/data/2.5/forecast?lat=${coord.lat}&lon=${coord.lon}&units=metric&appid=${API_KEY}&cnt=7`
				)
				.then((res) => {
					const respuesta = res.data.list;
					dispatch(getHourlyWather(respuesta));
				})
				.catch((err) => {
					console.log(err.message);

					dispatch(setErrorMessage("Problemas con la pagina de la API"));
				});
		} catch (error) {
			throw rejectWithValue("Error no se encuentra informacion");
		}
	}
);


export const WeeklyWeather: any = createAsyncThunk(
	"weatherThunk/getWeeklyInformation",
	async (_, { dispatch, rejectWithValue }) => {
		try {
			await axios
				.get(
					"https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/venezuela/2024-07-10/2024-07-17?unitGroup=metric&include=days%2Calerts%2Ccurrent%2Cevents&key=KF83SUVU2YR59RXVP8QBXJANU"
				)
				.then((res) => {
					const respuesta = res.data.days;
					
					dispatch(getConcurrentWeekWeather(respuesta));
				})
				.catch((err) => {
					console.log(err.message);

					dispatch(setErrorMessage("Problemas con la pagina de la API"));
				});
		} catch (error) {
			throw rejectWithValue("Error no se encuentra informacion");
		}
	}
);
