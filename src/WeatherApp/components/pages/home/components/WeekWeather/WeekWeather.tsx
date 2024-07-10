"use client";
import { Grid, Typography } from "@mui/material";
import React from "react";

import LightModeIcon from "@mui/icons-material/LightMode";
import { useDispatch } from "react-redux";
import store from "../../../../../../Redux/Store";
import { WeeklyWeather } from "../../../../../../Redux/Weather/ThunkWeather";
import { obtenerDiaSemana } from "../../../../../../hooks/dataTodate";

export type WeekWeatherProps = {
	// types...
};

const WeekWeather: React.FC<WeekWeatherProps> = ({}) => {
	const dispatch = useDispatch();
	const rootReducer = store.getState();
	const datawheather = rootReducer.weatherInformation.weeklyWeather;

	dispatch(WeeklyWeather());


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

			{datawheather.map((items) => (
				<Grid
					item
					key={items.datetime}
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
						{obtenerDiaSemana(items.datetime)}
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
						{items.conditions}
					</Typography>

					<Grid
						item
						sx={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "center",
						}}
					>
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
							{items.tempmax}
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
							/{items.tempmin}
						</Typography>
					</Grid>
				</Grid>
			))}
		</Grid>
	);
};

export default WeekWeather;
