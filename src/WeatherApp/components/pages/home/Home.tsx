import { Grid } from "@mui/material";
import { SearchHome } from "./components/SearchHome";
import { ToDayComponent } from "./components/ToDayComponent";
import { WeatherInformation } from "./components/WeatherInformation";

import { WeekWeather } from "./components/WeekWeather";
import { Main } from "./components/Main";
import { useDispatch } from "react-redux";

import { thunkWeather } from "../../../../Redux/Weather/ThunkWeather";
import store from "../../../../Redux/Store";

export const Home = () => {
	const dispatch = useDispatch();
	const rootReducer = store.getState();
	const datawheather = rootReducer.weatherInformation;
	const dataUser = rootReducer.userInformation;

	dispatch(thunkWeather("Venezuela"));
	

	return (
		<Grid
			item
			xs={11}
			sx={{ display: "flex", flexDirection: "row", pb: 1, pt: 1, pr: 1 }}
		>
			<Grid
				item
				xs={9}
				sx={{ display: "flex", flexDirection: "column", pr: 1 }}
			>
				<SearchHome />
				<Main />
				<ToDayComponent />
				<WeatherInformation />
			</Grid>

			<Grid
				item
				xs={3}
				sx={{
					bgcolor: "rgba(0, 0, 0, 0.11)",
					borderRadius: 6,
				}}
			>
				<WeekWeather />
			</Grid>
		</Grid>
	);
};
