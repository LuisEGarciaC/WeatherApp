"use client";
import { Box, Grid, Typography } from "@mui/material";
import Clearday from "../../../../../../assets/SetIcons/clear-day.svg";



export type ToDayComponentProps = {
	// types...
};

const ToDayComponent: React.FC<ToDayComponentProps> = ({}) => {
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
					<Grid
						item
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
							6:00 AM
						</Typography>
						<Grid xs={7}>
							<Box
								component={"img"}
								style={{
									marginTop: "15px",
									marginLeft: "10px",
									width: "50px",
									height: "50px",
								}}
								src={Clearday}
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
							25°C
						</Typography>
					</Grid>
					<Grid
						item
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
							6:00 AM
						</Typography>
						<Grid xs={7}>
							<Box
								component={"img"}
								style={{
									marginTop: "15px",
									marginLeft: "10px",
									width: "50px",
									height: "50px",
								}}
								src={Clearday}
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
							25°C
						</Typography>
					</Grid>
					<Grid
						item
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
							6:00 AM
						</Typography>
						<Grid xs={7}>
							<Box
								component={"img"}
								style={{
									marginTop: "15px",
									marginLeft: "10px",
									width: "50px",
									height: "50px",
								}}
								src={Clearday}
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
							25°C
						</Typography>
					</Grid>{" "}
					<Grid
						item
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
							6:00 AM
						</Typography>
						<Grid xs={7}>
							<Box
								component={"img"}
								style={{
									marginTop: "15px",
									marginLeft: "10px",
									width: "50px",
									height: "50px",
								}}
								src={Clearday}
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
							25°C
						</Typography>
					</Grid>{" "}
					<Grid
						item
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
							6:00 AM
						</Typography>
						<Grid xs={7}>
							<Box
								component={"img"}
								style={{
									marginTop: "15px",
									marginLeft: "10px",
									width: "50px",
									height: "50px",
								}}
								src={Clearday}
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
							25°C
						</Typography>
					</Grid>{" "}
					<Grid
						item
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
							6:00 AM
						</Typography>
						<Grid xs={7}>
							<Box
								component={"img"}
								style={{
									marginTop: "15px",
									marginLeft: "10px",
									width: "50px",
									height: "50px",
								}}
								src={Clearday}
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
							25°C
						</Typography>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default ToDayComponent;


