export const dataToDate = (data: string) => {
  const date = new Date(data);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

export const dataToHours = (data: string) => {
  const date = new Date(data);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  return `${hours}:${minutes}:${seconds}`;
}

export const splithours = (data: string) => {
  const date = data.split(" ");
  return date[1];
}

export const obtenerDiaSemana =(fechaStr : string) => {
		const fecha = new Date(fechaStr); // Crear objeto Date a partir de la fecha en string
		const dia = fecha.getDay(); // Obtener el número del día de la semana (0: domingo, 1: lunes, etc.)

		const diasSemana = [
			"Lunes",
			"Martes",
			"Miércoles",
			"Jueves",
			"Viernes",
			"Sábado",
			"Domingo",
		];
		return diasSemana[dia]; // Devolver el nombre del día de la semana correspondiente al número
	}