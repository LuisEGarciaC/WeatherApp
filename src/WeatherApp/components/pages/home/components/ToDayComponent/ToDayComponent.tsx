"use client";
import { Box, Grid, Typography } from "@mui/material";

import { useDispatch } from "react-redux";
import { HourlyWeather } from "../../../../../../Redux/Weather/ThunkWeather";
import store from "../../../../../../Redux/Store";
import { splithours } from "../../../../../../hooks/dataTodate";

export type ToDayComponentProps = {
	// types...
};

const ToDayComponent: React.FC<ToDayComponentProps> = ({}) => {
	const dispatch = useDispatch();
	const rootReducer = store.getState();
	const datawheather = rootReducer.weatherInformation.HourlyWeather;

	
	const coord = { lat: 8, lon: -65 };
	dispatch(HourlyWeather(coord));
	
	return (
		<Grid sx={{ bgcolor: "rgba(0, 0, 0, 0.05)", borderRadius: 6, pb: 2 }}>
			<Grid container spacing={0} sx={{ pt: 2, pl: 3, pb: 2 }}>
				<Typography sx={{ color: "rgba(0, 0, 0, 0.3)" }}>
					ToDayComponent works!
				</Typography>
			</Grid>
			<Grid
				container
				spacing={0}
				sx={{ display: "flex", flexDirection: "row" }}
			>
				<Grid
					container
					spacing={0}
					sx={{
						display: "flex",
						justifyContent: "space-Around",
						alignItems: "center",
					}}
				>
					{datawheather.map((data, index) => (
						<Grid
							item
							key={index}
							sx={{
								pl: 1,
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
							}}
						>
							<Typography
								sx={{
									padding: 1,
									color: "rgba(0, 0, 0, 0.3)",
								}}
								variant="body2"
							>
								{splithours(data.dt_txt)}
							</Typography>
							<Grid item xs={7}>
								<Box
									component={"img"}
									style={{
										marginTop: "15px",
										marginLeft: "10px",
										width: "50px",
										height: "50px",
									}}
									src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
									alt="svg"
								/>
							</Grid>
							<Typography
								sx={{
									padding: 1,
									color: "black",
									fontWeight: "bold",
								}}
								variant="body2"
							>
								{data.main.temp}°C
							</Typography>
						</Grid>
					))}
				</Grid>
			</Grid>
		</Grid>
	);
};

export default ToDayComponent;
