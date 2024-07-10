import { HourlyWeatherTypes } from "./hourlyWeather";

export interface WeatherTypes {
	queryCost: number;
	latitude: number;
	longitude: number;
	resolvedAddress: string;
	address: string;
	timezone: string;
	tzoffset: number;
	days: Day[];
	stations: { [key: string]: Station };
	error: any;
	errorMessage: string;
	isLoading: boolean;

  
}

export interface Day {
  datetime:       Date;
  datetimeEpoch:  number;
  tempmax:        number;
  tempmin:        number;
  temp:           number;
  feelslikemax:   number;
  feelslikemin:   number;
  feelslike:      number;
  dew:            number;
  humidity:       number;
  precip:         number;
  precipprob:     number;
  precipcover:    number;
  preciptype:     Icon[];
  snow:           number;
  snowdepth:      number;
  windgust:       number;
  windspeed:      number;
  winddir:        number;
  pressure:       number;
  cloudcover:     number;
  visibility:     number;
  solarradiation: number;
  solarenergy:    number;
  uvindex:        number;
  severerisk:     number;
  sunrise:        string;
  sunriseEpoch:   number;
  sunset:         string;
  sunsetEpoch:    number;
  moonphase:      number;
  conditions:     Conditions;
  description:    string;
  icon:           Icon;
  stations:       ID[];
  source:         Source;
  hours:          Hour[];
}

export enum Conditions {
  PartiallyCloudy = "Partially cloudy",
  RainPartiallyCloudy = "Rain, Partially cloudy",
}

export interface Hour {
  datetime:       string;
  datetimeEpoch:  number;
  temp:           number;
  feelslike:      number;
  humidity:       number;
  dew:            number;
  precip:         number;
  precipprob:     number;
  snow:           number;
  snowdepth:      number;
  preciptype:     Icon[] | null;
  windgust:       number;
  windspeed:      number;
  winddir:        number;
  pressure:       number;
  visibility:     number;
  cloudcover:     number;
  solarradiation: number;
  solarenergy:    number;
  uvindex:        number;
  severerisk:     number;
  conditions:     Conditions;
  icon:           Icon;
  stations:       ID[];
  source:         Source;
}

export enum Icon {
  PartlyCloudyDay = "partly-cloudy-day",
  PartlyCloudyNight = "partly-cloudy-night",
  Rain = "rain",
}

export enum Source {
  Obs = "obs",
}

export enum ID {
  Svmi = "SVMI",
  The80415099999 = "80415099999",
}

export interface Station {
  distance:     number;
  latitude:     number;
  longitude:    number;
  useCount:     number;
  id:           ID;
  name:         string;
  quality:      number;
  contribution: number;
}
