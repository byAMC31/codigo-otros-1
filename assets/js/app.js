const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;

//Corrección de selectores del DOM
//Cambiado a para seleccionar por clase
const $n = document.querySelector('.name'); 
const $b = document.querySelector('.blog'); 
const $l = document.querySelector('.location'); 

// Agregamos la palabra clave "async"
async function displayUser(username) {
  try {
     $n.textContent = 'Cargando...'; $b.textContent = ''; $l.textContent = '';

    //Realizamos la solicitud a la API
    const response = await fetch(`${usersEndpoint}/${username}`);

    //Convertimos la respuesta a JSON
    const data = await response.json();

    // Mostramos los datos obtenidos en el DOM
    $n.textContent = data.name 
    $b.textContent = data.blog 
    $l.textContent = data.location 
  } catch (error) {
    // Manejo de errores en caso de que falle la solicitud o el proceso
    handleError(error);
  }
}

//Función para manejar errores
function handleError(err) {
  console.error('Ocurrió un error:', err);
  $n.textContent = `Algo salió mal: ${err.message}`;$b.textContent = '';$l.textContent = '';
}

displayUser('stolinski');