"use client";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import React from "react";
import { Grid } from "@mui/material";

export type SearchHomeProps = {
	// types...
};

function SearchHome() {
	const [age, setAge] = React.useState("");

	const handleChange = (event: SelectChangeEvent) => {
		setAge(event.target.value);
	};

	return (
		<Grid sx={{ bgcolor: "rgba(0, 0, 0, 0.05)", borderRadius: 1 }}>
			<FormControl
				variant="standard"
				sx={{
					m: 1,
					minWidth: 120,
					width: "95%",
				}}
			>
				<InputLabel id="demo-simple-select-standard-label">
					Serach for a city
				</InputLabel>
				<Select
					labelId="demo-simple-select-standard-label"
					id="demo-simple-select-standard"
					value={age}
					onChange={handleChange}
					label="Age"
				>
					<MenuItem value="">
						<em>None</em>
					</MenuItem>
					<MenuItem value={10}>Rusia</MenuItem>
					<MenuItem value={20}>Alemania</MenuItem>
					<MenuItem value={30}>España</MenuItem>
					<MenuItem value={30}>USA</MenuItem>
				</Select>
			</FormControl>
		</Grid>
	);
}

export default SearchHome;
