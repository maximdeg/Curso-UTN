// Primer parametro del fetch
// URL

// Segundo parametro es el tipo de peticion HTTP GET, PUT,

// https://jsonplaceholder.typicode.com/users

const bodyHTML = document.getElementById("body-main");
const solicitarUsuarios = async () => {
  const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });
  const resultado = await respuesta.json();

  let postsHTML = "";

  resultado.forEach(post => {
    postsHTML += `
    <div>
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <button>💟</button>
    </div>`;
  });

  bodyHTML.innerHTML = postsHTML;
};

solicitarUsuarios();
