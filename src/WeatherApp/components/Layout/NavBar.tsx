import {
	AppBar,
	Box,
	IconButton,
	Toolbar,
	Typography,
	Button,
} from "@mui/material";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import MapIcon from "@mui/icons-material/Map";
import TuneIcon from "@mui/icons-material/Tune";
import { Link } from "react-router-dom";

const menuNav = [
	{ to: "/", name: "Home", icon: "" },
	{ to: "/login ", name: "Login", icon: "" },
	{ to: "/register", name: "Register", icon: "" },
	{ to: "/perfil", name: "Mi Perfil", icon: "" },
	{ to: "/logout", name: "Salir", icon: "" },
	{ to: "/error", name: "Error", icon: "" },
	{ to: "/Weather", name: "Weather", icon: <ThunderstormIcon /> },
	{ to: "/Cities", name: "Cities", icon: <FormatListBulletedIcon /> },
	{ to: "/Maps", name: "Maps", icon: <MapIcon /> },
	{ to: "/Settings", name: "Settings", icon: <TuneIcon /> },
];

export const NavBar = () => {
	return (
		<AppBar
			position="relative"
			sx={{
				width: "100px",
				height: "98.5%",
				bgcolor: "rgba(0, 0, 0, 0.1)",
				borderRadius: 6,
			}}
		>
			<Toolbar
				disableGutters
				sx={{
					display: "flex",
					flexDirection: "column",
					width: "100px",
					marginTop: "40px",
				}}
			>
				<IconButton
					size="large"
					aria-label="account of current user"
					aria-controls="menu-appbar"
					aria-haspopup="true"
					// onClick={handleMenu}
					color="primary"
					sx={{
						paddingTop: "2px",
						marginBottom: "20px",
						transition: "background-color 0.3s",
						"&:hover": {
							bgcolor: "rgba(0, 0, 0, 0.2)",
						},
					}}
				>
					<BeachAccessIcon sx={{ fontSize: "30px" }} />
				</IconButton>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					{menuNav.map((item) => (
						<Button
							key={item.name}
							sx={{
								my: 2,
								color: "rgba(0, 0, 0, 0.6)",
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								"&:hover": {
									bgcolor: "rgba(0, 0, 0, 0.2)",
								},
							}}
						>
							<Typography
								variant="caption"
								sx={{
									mt: 1,
									fontSize: "14px",
									color: "black",
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
								}}
							>
								{item.icon}
								<Link
									style={{ textDecoration: "none", color: "black" }}
									to={item.to}
								>
									{item.name}
								</Link>
							</Typography>
						</Button>
					))}
				</Box>
			</Toolbar>
		</AppBar>
	);
};
