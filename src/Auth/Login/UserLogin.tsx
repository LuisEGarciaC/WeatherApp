import { Divider, Link, TextField, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { InicialAuthentication } from "../../Redux/User/ThunkUser";
import { setIsLoading } from "../../Redux/User/Userslice";
import store from "../../Redux/Store";

export const UserLogin = () => {
	const rootReducer = store.getState();
	const isLoading = rootReducer.userInformation.isLoading;

	const navigate = useNavigate();
	const [userName, setUserName] = useState("Antonette");
	const [userEmail, setEmail] = useState("Shanna@melissa.tv");

	const dispatch = useDispatch();

	const hansdlUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUserName(event.target.value);
	};

	const hansdEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value);
	};

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		const datosUser = { userName, userEmail };
		dispatch(setIsLoading(true));
		dispatch(InicialAuthentication(datosUser));

		if (isLoading === false) {
			navigate("/");
		}
	};

	return (
		<form>
			<Grid
				item
				columnSpacing={0}
				xs={12}
				height="100vh"
				display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
			>
				<Grid
					container
					spacing={2}
					sx={{ border: "2px solid grey", padding: "20px" }}
					flexDirection={"column"}
					display={"flex"}
				>
					<Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
						<Typography variant="h5"> Iniciciar Sesion</Typography>
					</Grid>

					<Grid item>
						<Divider />
					</Grid>

					<Grid item xs={12}>
						<TextField
							onChange={hansdEmailChange}
							name="email"
							fullWidth
							label="Email"
							type="email"
						/>
					</Grid>
					<Grid item xs={12} pt={2}>
						<TextField
							onChange={hansdlUserNameChange}
							name="Username"
							fullWidth
							label="User Name"
							type="text"
						/>
					</Grid>
					<Grid
						item
						xs={12}
						sx={{ display: "flex", justifyContent: "center" }}
						pt={2}
					>
						<Button
							onClick={handleClick}
							variant="contained"
							type="submit"
							startIcon={<HowToRegIcon />}
						>
							Iniciar Sesion
						</Button>
					</Grid>
					<Grid item xs={12} pt={2}>
						<Divider />
					</Grid>

					<Grid
						item
						xs={12}
						sx={{ display: "flex", justifyContent: "end" }}
						pt={2}
					>
						<Link to="/register" component={RouterLink}>
							olvide mi contraseña
						</Link>
					</Grid>
					<Grid item xs={12} sx={{ display: "flex", justifyContent: "end" }}>
						<Link to="/register" component={RouterLink}>
							Registrar
						</Link>
					</Grid>
				</Grid>
			</Grid>
		</form>
	);
};
