import { Grid } from "@mui/material";
import { SearchHome } from "./components/SearchHome";
import { ToDayComponent } from "./components/ToDayComponent";
import { WeatherInformation } from "./components/WeatherInformation";

import { WeekWeather } from "./components/WeekWeather";
import { Main } from "./components/Main";


export const Home = () => {
	return (
		<Grid container item xs={11} sx={{ display: "flex", flexDirection: "row", pb: 1, pt: 1, pr: 1 }}>
			<Grid
				container
				item
				xs={9}
				spacing={0}
				sx={{ display: "flex", flexDirection: "column", pr: 1 }}
			>
				<SearchHome />
				<Main />
				<ToDayComponent />
				<WeatherInformation />
			</Grid>

			<Grid
				container
				item
				xs={3}
				spacing={0}
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
