// const alertar = () =>{
// alert('Hola mundo')
// }

//
// const btn2HTML = document.getElementById('btn-2')

// btn2HTML.onclick = alertar

//Llamar un elemento por clase
// const btn3HTML = document.querySelector('.btn-3')

/* btn3HTML.addEventListener('click', alertar) */
// btn3HTML.addEventListener('mouseover', alertar)

// btn3HTML.textContent = 'pepe'
/* 
En html tendremos un numero que se mostrara en un span, dicho numero seria inicialmente 1
Debemos crear el numero mediante JS
Habra un boton <button>+</button>
Cuando ese boton sea clickeado el numero debera incrementarse en 1


Crear el boton para decrementar 

(Opcional) que no se pueda decrementar a - de 1
*/

const contadorHTML = document.getElementById("contador");
const btnIncrementarHTML = document.querySelector(".btn-incrementar");
const btnDecrementarHTML = document.querySelector(".btn-decrementar");
const errorContadorHTML = document.querySelector(".error-contador");

const renderizarContador = () => {
  contadorHTML.innerText = estadoContador;
};
const renderizarError = textoError => {
  errorContadorHTML.innerText = textoError;
};
const limpiarError = () => {
  if (errorContadorHTML.innerText) {
    renderizarError("");
  }
};

const handleIncrementarContador = () => {
  estadoContador = estadoContador + 1;
  renderizarContador();
  limpiarError();
};

const handleDecrementarContador = () => {
  if (estadoContador > 1) {
    estadoContador = estadoContador - 1;
    renderizarContador();
  } else {
    renderizarError("No se puede decrementar a 0");
  }
};

let estadoContador = 1;
renderizarContador();

btnIncrementarHTML.addEventListener("click", handleIncrementarContador);
btnDecrementarHTML.addEventListener("click", handleDecrementarContador);

const formLoginHTML = document.getElementById("form-login");

console.dir(formLoginHTML.password.value);
console.dir(formLoginHTML.username.value);

const handleLogin = e => {
  e.preventDefault();
  console.log("formulario enviado");
  console.dir(formLoginHTML.password.value);
  console.dir(formLoginHTML.username.value);
};

formLoginHTML.addEventListener("submit", handleLogin);
