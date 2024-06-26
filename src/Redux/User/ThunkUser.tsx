import { createAsyncThunk } from "@reduxjs/toolkit";
import { setErrorMessage, setUserLogin } from "./Userslice";
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
