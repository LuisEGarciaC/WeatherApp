import { Route, Routes } from "react-router-dom";
import { Home } from "../WeatherApp/components/pages/home/Home";
import { UserLogin } from "../Auth/Login/UserLogin";
import { AppRegister } from "../Auth/register/AppRegister";
import { UserPerfil } from "../Auth/perfil/UserPerfil";
import ErrorPage from "../WeatherApp/components/pages/Error/ErrorPage";
import { Logout } from "../Auth/Logout";
export const WeatherRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<UserLogin />} />
			<Route path="/register" element={<AppRegister />} />
			<Route path="/perfil" element={<UserPerfil />} />
			<Route path="/logout" element={<Logout />} />
			<Route path="/error" element={<ErrorPage />} />
		</Routes>
	);
};
