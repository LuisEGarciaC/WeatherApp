import { Alert, Box, Button, Grid, TextField, Typography } from "@mui/material";
// import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ThunkUserRegister } from "../../Redux/User/ThunkUser";
import { useDispatch } from "react-redux";
import { MapGeo } from "../../components/MapGeo/MapGeo";
import { useState } from "react";
// import { getUserGeoLocation } from "../../helpers";

export const AppRegister = () => {
	const dispatch = useDispatch();
	const [cords, setCords] = useState({
		lat: 0,
		log: 0,
	});
	// useEffect(() => {
	// 	getUserGeoLocation().then((data) => {
	// 		setLat(data[1]);
	// 		setLog(data[0]);

	// 		console.log(lat,log)
	// 	})
	// }, []);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data: any) => {
		console.log("data:", data);
		dispatch(ThunkUserRegister(data));
	};

	return (
		<Grid item columnSpacing={0} xs={12}>
			<Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
				<Typography variant="h5"> Registro de Usuario</Typography>
			</Grid>

			<Grid container item spacing={0} xs={12} pt={2}>
				<Box
					onSubmit={handleSubmit(onSubmit)}
					component="form"
					sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
					noValidate
					autoComplete="off"
				>
					<Grid container item spacing={0} pt={2} justifyContent={"center"}>
						<TextField
							id="Nick Name"
							label="Nick Name"
							placeholder="Nick name"
							{...register("username", {
								required: {
									value: true,
									message: "El nombre del Usuario es requerido",
								},
								minLength: {
									value: 3,
									message:
										"El nombre del Usuario debe de tener al menos 3 caracteres",
								},
								maxLength: {
									value: 10,
									message:
										"El nombre del Usuario debe de tener como maximo 10 caracteres",
								},
							})}
						/>
						{errors.Nickname && (
							<Alert severity="error">{String(errors.Nickname.message)}</Alert>
						)}
						<TextField
							id="name"
							label="Nombre del usuario"
							placeholder="User name"
							{...register("name", {
								required: {
									value: true,
									message: "El nombre del Usuario es requerido",
								},
								minLength: {
									value: 3,
									message:
										"El nombre del Usuario debe de tener al menos 3 caracteres",
								},
								maxLength: {
									value: 20,
									message:
										"El nombre del Usuario debe de tener como maximo 20 caracteres",
								},
							})}
						/>
						{errors.name && (
							<Alert severity="error">{String(errors.name.message)}</Alert>
						)}
						<TextField
							type="email"
							id="user email"
							label="Email"
							placeholder="User Email"
							{...register("email", {
								required: {
									value: true,
									message: "El email del Usuario es requerido",
								},
								pattern: {
									value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
									message: "El email no es valido",
								},
							})}
						/>
						{errors.email && (
							<Alert severity="error">{String(errors.email.message)}</Alert>
						)}
					</Grid>
					<Grid
						container
						item
						spacing={0}
						xs={12}
						pt={2}
						justifyContent={"center"}
					>
						<TextField
							label="Telefono celular"
							type="phone"
							id="userphone"
							placeholder="Telefono celular"
							{...register("phone", {
								required: {
									value: true,
									message: "El telefono del Usuario es requerido",
								},
								minLength: {
									value: 10,
									message:
										"El telefono del Usuario debe de tener al menos 10  digitos",
								},
							})}
						/>
						{errors.phone && (
							<Alert severity="error">{String(errors.phone.message)}</Alert>
						)}
						<TextField
							label="Website"
							type="website"
							id="userwebsite"
							placeholder="website"
							{...register("website", {
								required: {
									value: true,
									message: "El website del Usuario es requerido",
								},
								pattern: {
									value:
										/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
									message: "El email no es valido",
								},
							})}
						/>
						{errors.website && (
							<Alert severity="error">{String(errors.website.message)}</Alert>
						)}
					</Grid>
					<Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
						<Typography variant="h5"> Direaccion del usario</Typography>
					</Grid>
					<Grid
						container
						item
						spacing={0}
						xs={12}
						pt={2}
						justifyContent={"center"}
					>
						<TextField
							label="Municipio o Localidad"
							id="user street"
							{...register("street", {
								required: {
									value: true,
									message: "La Municipio o Localidad del Usuario es requerido",
								},
							})}
						/>
						{errors.street && (
							<Alert severity="error">{String(errors.street.message)}</Alert>
						)}
						<TextField
							type="text"
							label="Direccion"
							id="user suite"
							{...register("suite", {
								required: {
									value: true,
									message: "Direccion",
								},
							})}
						/>
						{errors.suite && (
							<Alert severity="error">{String(errors.suite.message)}</Alert>
						)}
						<TextField
							id="user city"
							label="Cudad"
							{...register("ciudad", {
								required: {
									value: true,
									message: "Ciudad es requerida",
								},
								minLength: {
									value: 5,
									message:
										"La ciudad del Usuario debe de tener al menos 5 caracteres",
								},
							})}
						/>
						<TextField
							type="number"
							id="user zipcode"
							label="Codigo de Postal"
							placeholder="Codigo postal"
							{...register("zipcode", {
								required: {
									value: true,
									message: "El Codigo Postal del Usuario es requerido",
								},
								minLength: {
									value: 3,
									message:
										"El Codigo Postal del Usuario debe de tener al menos 3 digitos",
								},
								maxLength: {
									value: 4,
									message:
										"El Codigo Postal del Usuario debe de tener al menos 4 digitos",
								},
							})}
						/>
					</Grid>
					<Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
						<Typography variant="h5"> Geo localizacion</Typography>
					</Grid>
					{/* <Grid container padding={3} item xs={12} sx={{ display: "flex", justifyContent: "center", border: "1px solid black"}}>
						<MapGeo coords={cords} />
					</Grid> */}
					<Grid
						container
						item
						spacing={0}
						xs={12}
						pt={2}
						justifyContent={"center"}
					>
						<TextField
							id="user street"
							label="Su latitud es"
							InputProps={{
								readOnly: true,
							}}
							{...register("lat", {})}
						/>
						<TextField
							id="user suite"
							label="Su  longitud es"
							InputProps={{
								readOnly: true,
							}}
							{...register("lng", {})}
						/>
					</Grid>
					<Grid
						container
						item
						spacing={0}
						xs={12}
						pt={2}
						justifyContent={"center"}
					>
						<Button type="submit" variant="outlined">
							Outlined
						</Button>
					</Grid>
				</Box>
			</Grid>
		</Grid>
	);
};
