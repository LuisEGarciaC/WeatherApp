export interface WeekForecastWeather {
	queryCost: number;
	latitude: number;
	longitude: number;
	resolvedAddress: string;
	address: string;
	timezone: string;
	tzoffset: number;
	days: CurrentConditions[];
	alerts: any[];
	stations: { [key: string]: Station };
	currentConditions: CurrentConditions;
}

export interface CurrentConditions {
	datetime: string;
	datetimeEpoch: number;
	temp: number;
	feelslike: number;
	humidity: number;
	dew: number;
	precip: number;
	precipprob: number;
	snow: number;
	snowdepth: number;
	preciptype: string[] | null;
	windgust: number;
	windspeed: number;
	winddir: number;
	pressure: number;
	visibility: number | null;
	cloudcover: number;
	solarradiation: number;
	solarenergy: number;
	uvindex: number;
	conditions: string;
	icon: string;
	stations: string[] | null;
	source: string;
	sunrise: string;
	sunriseEpoch: number;
	sunset: string;
	sunsetEpoch: number;
	moonphase: number;
	tempmax?: number;
	tempmin?: number;
	feelslikemax?: number;
	feelslikemin?: number;
	precipcover?: number;
	severerisk?: number;
	description?: string;
}

export interface Station {
	distance: number;
	latitude: number;
	longitude: number;
	useCount: number;
	id: string;
	name: string;
	quality: number;
	contribution: number;
}
