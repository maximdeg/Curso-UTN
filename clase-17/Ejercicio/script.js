const renderizarCarrito = function (carrito) {
  const carritoHTML = document.getElementById("carrito");
  const totalHTML = document.getElementById("total");

  let total = 0;
  let divCarrito = "";

  carrito.forEach(e => {
    divCarrito += `
            <div>
                <h1>${e.nombre} #${e.id}</h1>
                <img src="${e.img}" alt="" style="width: 200px">
                <br>
                <span> Precio unitario: ${e.precio} x ${e.cantidad}</span>
                <br>
                <span> Total: ${e.precio * e.cantidad}</span>
            </div>
            <hr>
        `;
    total += e.precio * e.cantidad;
  });

  carritoHTML.innerHTML = divCarrito;
  totalHTML.innerHTML = `<span> TOTAL: ${total}</span>`;
};

const carrito = [
  {
    nombre: "Computadora Gamer",
    id: 1,
    precio: 1500,
    cantidad: 3,
    img: "https://images.pexels.com/photos/7238759/pexels-photo-7238759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    nombre: "Computadora MAC",
    id: 2,
    precio: 850,
    cantidad: 4,
    img: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    nombre: "Computadora Laptop HP 15 Pulgadas",
    id: 3,
    precio: 435,
    cantidad: 1,
    img: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

// const eliminarItemPorId = id => {
//   const nuevoCarrito = carrito.find(e => );
//   renderizarCarrito(nuevoCarrito);
// };

eliminarItemPorId(2);
