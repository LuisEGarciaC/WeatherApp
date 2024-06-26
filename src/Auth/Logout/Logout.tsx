import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { UserLougout } from "../../Redux/User/Userslice";

export type LogoutProps = {
	// types...
};

const Logout: React.FC<LogoutProps> = () => {
	const dispatch = useDispatch();
	dispatch(UserLougout());
	return <Navigate to={"/login"} replace />;
};

export default Logout;
