export const getUserGeoLocation = async (): Promise<[number, number]> => {

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        console.log({ coords });
        resolve([coords.longitude, coords.latitude]);
      },
      (err) => {
        alert("No se pudo obtener la geolocalización");
        console.log(err);
        reject(err);
      } 
    );
  });
  
}