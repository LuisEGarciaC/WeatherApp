import { createAsyncThunk } from "@reduxjs/toolkit";
import { setErrorMessage, setUserLogin, userRegister } from "./Userslice";
import axios from "axios";

export const InicialAuthentication: any = createAsyncThunk(
	/*
		uso la API de place holder para loguarme y traerme los datos
		https://jsonplaceholder.typicode.com/users
		agrego la informacion de email y username que viene se UserInformation
		https://jsonplaceholder.typicode.com/users?email=Shanna%40melissa.tv&username=Antonette
	*/
	"userAuth/checkingAuth",
	async (
		{ userName, userEmail }: { userName: string; userEmail: string },
		{ dispatch, rejectWithValue }
	) => {
		try {
			await axios
				.get(
					`https://jsonplaceholder.typicode.com/users?email=${userEmail}&"username=${userName}"`
				)
				.then((res) => {
					/*
					recibo la respuesta en una Array de datos en la posicion 0 esta los datos del usuario
					*/
					const respuesta = res.data[0];
					/*
						uso el dispash en el slice de login() le agrego la información traida de la API
						*/
					dispatch(setUserLogin(respuesta));
				})
				.catch((err) => {
					console.log(err.message);
					// uso el dispatch para enviar errores de la API
					dispatch(setErrorMessage("Problemas con la pagina de la API"));
					// err
				});
		} catch (error) {
			throw rejectWithValue("Error no se encuentra usuario");
		}
	}
);

export const ThunkUserRegister: any = createAsyncThunk(
	"userAuth/register",
	async (userData: any, { dispatch, rejectWithValue }) => {
		try {
			await axios
				.post("http://localhost:3001/users", {
					id: crypto.randomUUID(),
					name: userData.name,
					username: userData.username,
					email: userData.email,
					units: "",
					address: {
						street: userData.street,
						suite: userData.suite,
						city: userData.city,
						zipcode: userData.zipcode,
						geo: {
							lat: userData.lat,
							lng: userData.lng,
						},
					},
					phone: userData.phone,
					website: userData.website,
				})
				.then((res) => {
					console.log("thunk");
					dispatch(userRegister(res.data));
				})
				.catch((err) => {
					console.log(err);
					dispatch(setErrorMessage(err.response.data.message));
				});
		} catch (error) {
			throw rejectWithValue("Error no se encuentra usuario");
		}
	}
);
