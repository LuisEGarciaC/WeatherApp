"use client";
import { Grid, Typography } from "@mui/material";
import React from "react";

import LightModeIcon from "@mui/icons-material/LightMode";

export type WeekWeatherProps = {
	// types...
};

const WeekWeather: React.FC<WeekWeatherProps> = ({}) => {
	return (
		<Grid
			container
			sx={{
				bgcolor: "rgba(0, 0, 0, 0.05)",
				borderRadius: 6,
				display: "flex",
				flexDirection: "column",
			}}
		>
			<Grid item>
				<Typography
					variant="h3"
					color="initial"
					sx={{
						fontSize: 15,
						color: "rgba(0, 0, 0, 0.3)",
						pt: 2,
						pl: 3,
						textAlign: "left",
					}}
				>
					7-DAY FORECAST
				</Typography>
			</Grid>
			<Grid
				item
				sx={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
				}}
			>
				<Typography
					variant="h3"
					color="initial"
					sx={{ fontSize: 15, color: "rgba(0, 0, 0, 0.3)", pt: 2, pl: 3 }}
				>
					Today
				</Typography>
				<Typography
					variant="h3"
					color="initial"
					sx={{
						fontSize: 15,
						pt: 2,
						pl: 3,
						fontWeight: "bold",
						color: "black",
					}}
				>
					<LightModeIcon />
					Sunnny
				</Typography>

				<Grid item sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
					<Typography
						variant="h3"
						color="initial"
						sx={{
							fontSize: 15,
							pt: 2,
							marginLeft: 1,
							fontWeight: "bold",
							color: "black",
							paddingRight: 1,
						}}
					>
						30
					</Typography>
					<Typography
						variant="h3"
						color="initial"
						sx={{
							fontSize: 15,
							pt: 2,
							paddingRight: 2,
							
							color: "black",
							
						}}
					>
						/32
					</Typography>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default WeekWeather;
