import { HourlyWeatherTypes } from "./hourlyWeather";
import { WeekForecastWeather } from "./weekWeather";

export interface OpenWatherTypes {
	coord: Coord;
	weather: Weather[];
	base: string;
	main: Main;
	visibility: number;
	wind: Wind;
	clouds: Clouds;
	dt: number;
	sys: Sys;
	timezone: number;
	id: number;
	name: string;
	cod: number;
	error: any;
	errorMessageWeather: string | null;
	isLoading: boolean;
	HourlyWeather: HourlyWeatherTypes[];
	weeklyWeather: WeekForecastWeather[];
}

export interface Clouds {
	all: number;
}

export interface Coord {
	lon: number;
	lat: number;
}

export interface Main {
	temp: number;
	feels_like: number;
	temp_min: number;
	temp_max: number;
	pressure: number;
	humidity: number;
	sea_level: number;
	grnd_level: number;
}

export interface Sys {
	country: string;
	sunrise: number;
	sunset: number;
}

export interface Weather {
	id: number;
	main: string;
	description: string;
	icon: string;
}

export interface Wind {
	speed: number;
	deg: number;
	gust: number;
}
