"use client";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import store from "../../../../../../Redux/Store";
export type MainProps = {
	// types...
};

const Main: React.FC<MainProps> = ({}) => {
	const rootReducer = store.getState();
	const datawheather = rootReducer.weatherInformation;


	const date = new Date(datawheather.dt * 1000);

	// Hours part from the timestamp
	var hours = date.getHours();

	// Minutes part from the timestamp
	var minutes = "0" + date.getMinutes();

	let formattedTime = hours + ":" + minutes.slice(-2);

	console.log(formattedTime);

	return (
		<Grid item sx={{ mt: 2, display: "flex", flexDirection: "row" }}>
			<Grid item xs={5}>
				<Typography
					sx={{
						fontSize: 30,
						display: "flex",
						justifyItems: "left",
						color: "black",
						pl: 5,
					}}
				>
					{datawheather.name}
				</Typography>
				<Typography
					sx={{
						fontSize: 15,
						display: "flex",
						justifyItems: "left",
						color: "grey",

						pl: 5,
					}}
				>
					Change if rain: 0%
				</Typography>
				<Typography
					sx={{
						fontSize: 45,
						display: "flex",
						justifyItems: "left",
						fontWeight: "bold",
						color: "black",
						pl: 5,
					}}
				>
					{datawheather.main.temp} °C
				</Typography>
			</Grid>
			<Grid item xs={7}>
				<Box
					component={"img"}
					style={{ width: "35%", padding: "7px" }}
					src={`https://openweathermap.org/img/wn/${datawheather.weather[0].icon}@2x.png`}
					alt="svg"
				/>
			</Grid>
		</Grid>
	);
};

export default Main;
