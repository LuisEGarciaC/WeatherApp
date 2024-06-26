import { Link } from "react-router-dom";


export const NavBar = () => {
  return (
		<nav>
			<Link to="/">Home</Link>
			<Link to="/login">Login</Link>
			<Link to="/register">Registrar</Link>
			<Link to="/perfil">Mi perfil</Link>
			<Link to="/logout">Salir</Link>
			<Link to="/error">Error</Link>
		</nav>
	);
}
