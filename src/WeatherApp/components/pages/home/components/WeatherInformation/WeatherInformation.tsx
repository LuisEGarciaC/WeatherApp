"use client";
import { Grid, Button, Typography } from "@mui/material";
import React from "react";

import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import AirIcon from "@mui/icons-material/Air";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import store from "../../../../../../Redux/Store";
export type WeatherInformationProps = {
	// types...
};

const WeatherInformation: React.FC<WeatherInformationProps> = ({ }) => {
		const rootReducer = store.getState();
		const datawheather = rootReducer.weatherInformation;
	return (
		<Grid
			item
			sx={{
				bgcolor: "rgba(0, 0, 0, 0.05)",
				borderRadius: 6,
				display: "flex",
				flexDirection: "column",
				mt: 1,
				pt: 3,
			}}
		>
			<Grid
				item
				xs={12}
				sx={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					mb: 2,
				}}
			>
				<Grid item sx={{ pl: 2, pt: 1 }}>
					<Typography sx={{ fontSize: 15, color: "rgba(0, 0, 0, 0.3)" }}>
						AIR CONDITIONS
					</Typography>
				</Grid>
				<Grid item>
					<Button
						variant="contained"
						color="primary"
						sx={{ fontSize: 10, mr: 2, borderRadius: 6 }}
					>
						See more...
					</Button>
				</Grid>
			</Grid>
			<Grid item sx={{ display: "flex", flexDirection: "row" }}>
				<Grid
					item
					xs={6}
					sx={{
						display: "flex",
						flexDirection: "column",
						textAlign: "left",
						pl: 3,
					}}
				>
					<Typography sx={{ color: "rgba(0, 0, 0, 0.3)" }}>
						<DeviceThermostatIcon />
						Real Field
					</Typography>
					<Typography sx={{ fontWeight: "bold", fontSize: 30, pl: 1 }}>
						{datawheather.main.feels_like}
					</Typography>
					<Typography sx={{ color: "rgba(0, 0, 0, 0.3)" }}>
						<WaterDropIcon />
						Chance of Rain
					</Typography>
					<Typography sx={{ fontWeight: "bold", fontSize: 30, pl: 1 }}>
						{datawheather.main.humidity}%
					</Typography>
				</Grid>
				<Grid
					item
					xs={6}
					sx={{
						display: "flex",
						flexDirection: "column",
						textAlign: "left",
					}}
				>
					<Typography sx={{ color: "rgba(0, 0, 0, 0.3)" }}>
						{" "}
						<AirIcon />
						Wind
					</Typography>
					<Typography sx={{ fontWeight: "bold", fontSize: 30, pl: 1 }}>
						{datawheather.wind.speed} m/s
					</Typography>
					<Typography sx={{ color: "rgba(0, 0, 0, 0.3)" }}>
						{" "}
						<Brightness7Icon />
						Uv Index
					</Typography>
					<Typography sx={{ fontWeight: "bold", fontSize: 30, pl: 1 }}>
						{datawheather.main.temp_max} °C
					</Typography>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default WeatherInformation;
