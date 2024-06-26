import "./App.css";
import { WeatherRoutes } from "./WeatherApp/Routes/WeatherRoutes";
import { NavBar } from "./WeatherApp/components/Layout/NavBar";

function App() {
	return (
		<>
			<NavBar />
			<WeatherRoutes />
		</>
	);
}

export default App;
