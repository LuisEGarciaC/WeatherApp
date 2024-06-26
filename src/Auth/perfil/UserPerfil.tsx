import { Navigate } from "react-router-dom";
import store from "../../Redux/Store";
import { Grid, Typography } from "@mui/material";

export const UserPerfil = () => {
	const rootReducer = store.getState();
	const dataUser = rootReducer.userInformation;

	if (dataUser.userStatus === "not_authenticated") {
		return <Navigate to={"/login"} replace />;
	}

	return (
		<Grid height="100vh">
			<Grid container spacing={0} direction={"row"} justifyContent="center">
				<Typography variant="h3">Mi Perfil</Typography>
			</Grid>
			<Grid container spacing={0} direction={"column"} justifyContent="center">
				<Typography variant="body1">
					Nombre user: {dataUser.username}
				</Typography>
				<Typography variant="body1">
					Nombre del usurio: {dataUser.name}
				</Typography>
			</Grid>
			<Grid container justifyContent={"center"} sx={{ marginTop: "10px" }}>
				<Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
					Direccion del usuario
				</Typography>
			</Grid>
			<Grid>
				<Typography variant="body2">Ciudad: {dataUser.address.city}</Typography>
				<Typography variant="body2">
					Latitud: {dataUser.address.geo.lat}
				</Typography>
				<Typography variant="body2">
					Logitud: {dataUser.address.geo.lng}
				</Typography>
				<Typography variant="body2">
					Calle: {dataUser.address.street}
				</Typography>
				<Typography variant="body2">
					Codigo postal: {dataUser.address.zipcode}
				</Typography>
			</Grid>
		</Grid>
	);
};
