"use client";
import { Grid, Button, Typography } from "@mui/material";
import React from "react";

import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import AirIcon from "@mui/icons-material/Air";
import Brightness7Icon from "@mui/icons-material/Brightness7";
export type WeatherInformationProps = {
	// types...
};

const WeatherInformation: React.FC<WeatherInformationProps> = ({}) => {
	return (
		<Grid
			container
			sx={{
				bgcolor: "rgba(0, 0, 0, 0.05)",
				borderRadius: 6,
				display: "flex",
				flexDirection: "row",
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
				<Typography sx={{ color: "rgba(0, 0, 0, 0.3)" }}><DeviceThermostatIcon />Real Field</Typography>
				<Typography sx={{ fontWeight: "bold", fontSize: 30, pl: 1 }}>
					30°
				</Typography>
				<Typography sx={{ color: "rgba(0, 0, 0, 0.3)" }}>
					<WaterDropIcon />Chance of Rain
				</Typography>
				<Typography sx={{ fontWeight: "bold", fontSize: 30, pl: 1 }}>
					0%
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
				<Typography sx={{ color: "rgba(0, 0, 0, 0.3)" }}> <AirIcon/>Wind</Typography>
				<Typography sx={{ fontWeight: "bold", fontSize: 30, pl: 1 }}>
					0.2 km/h
				</Typography>
				<Typography sx={{ color: "rgba(0, 0, 0, 0.3)" }}> <Brightness7Icon />Uv Index</Typography>
				<Typography sx={{ fontWeight: "bold", fontSize: 30, pl: 1 }}>
					3
				</Typography>
			</Grid>
		</Grid>
	);
};

export default WeatherInformation;
