import { Route, Routes } from "react-router-dom";
import { Home} from "../components/pages/home/Home";
import { UserLogin } from "../components/pages/Login/UserLogin";
import { AppRegister } from "../components/pages/register/AppRegister";
import { UserPerfil } from "../components/pages/perfil/UserPerfil";
import ErrorPage from "../components/pages/Error/ErrorPage";
export const WeatherRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<UserLogin />} />
			<Route path="/register" element={<AppRegister />} />
			<Route path="/perfil" element={<UserPerfil />} />
			<Route path="/error" element={<ErrorPage />} />
		</Routes>
	);
};
