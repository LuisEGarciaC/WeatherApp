import { Grid } from "@mui/material";
import "./App.css";
import { WeatherRoutes } from "./Routes/WeatherRoutes";

import { NavBar } from "./WeatherApp/components/Layout/NavBar";

function App() {
	return (
		<Grid
			width={"100vw"}
			sx={{ display: "flex", backgroundColor: "rgba(29, 158, 250,1)" }}
		>
			<Grid
				container
				
				margin={5}
				borderRadius={2}
				sx={{ color: "black", backgroundColor: "white" }}
				
				justifyContent={"space-between"}
			>
				<NavBar />
				<WeatherRoutes />
			</Grid>
		</Grid>
	);
}

export default App;
