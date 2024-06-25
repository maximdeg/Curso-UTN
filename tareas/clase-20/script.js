const formHTML = document.getElementById("form");
const titlePostHTML = document.getElementById("post-title");
const bodyPostHTML = document.getElementById("post-body");
const btnPost = document.getElementById("btn-post");
const postContent = async (titlePost, bodyPost) => {
  await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: titlePost,
      body: bodyPost,
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  console.log("status: 🟢200 OK");
};

const getContent = () => {
  const titlePost = titlePostHTML.value;
  const bodyPost = bodyPostHTML.value;

  postContent(titlePost, bodyPost);
};

const handleSubmit = e => {
  e.preventDefault();
  getContent();
};

formHTML.addEventListener("submit", handleSubmit);
/* 
Crear un formulario de posteo
el formulario tendra un input para el titulo 
y un textarea para el body y un boton con el texto post que active el evento submit

Cuando se envie el formulario se debera capturar titulo y body y se envia via fetch a esta direccion: 
'https://jsonplaceholder.typicode.com/posts'
Y van a mostrar por consola un 'Enviado'
*/
