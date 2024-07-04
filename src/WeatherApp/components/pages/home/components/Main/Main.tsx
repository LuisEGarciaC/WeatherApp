"use client";
import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Clearday from "../../../../../../assets/SetIcons/clear-day.svg";
export type MainProps = {
	// types...
};

const Main: React.FC<MainProps> = ({}) => {
	return (
		<Grid sx={{ mt: 2, display: "flex", flexDirection: "row" }}>
			<Grid xs={5} sx={{}}>
				<Typography
					sx={{
						fontSize: 30,
						display: "flex",
						justifyItems: "left",

						color: "black",
						pl: 5,
					}}
				>
					Madrid
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
					31°C
				</Typography>
			</Grid>
			<Grid xs={7} >
				<Box component={"img"} style={{ width: "35%", padding: "7px" }} src={Clearday} alt="svg" />
			</Grid>
		</Grid>
	);
};

export default Main;
