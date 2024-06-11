// DOM - Document object model
// document is a global variable that is created at the beggining of the HTML

console.dir(document);
const title = document.getElementById("title");

console.dir(title.innerText);

title.innerText = "Hola Maxim";

console.log(title.innerText);

// const name = prompt("Input your name");
// title.innerText = `Hola ${name}!`;

const boxProduct = document.getElementById("box-product");
console.dir(boxProduct);

boxProduct.innerHTML = `    
    <h2>I'm a subtitle</h2>
    <p>I'm a paragraph</p>
`;

const user = {
  name: "Maxim",
  lastName: "Degtiarev",
  address: "Calle falsa 777",
  age: 32,
};

// user.name = prompt("Input your name");
// user.lastName = prompt("Input your last name");
// user.address = prompt("Input your adress");
// user.age = prompt("Input your age");

const userCard = document.getElementById("user-card");

userCard.innerHTML = `
    <h2>${user.name} ${user.lastName}</h2>
    <span>Tu edad es ${user.age}</span>
    <span><b>${user.address}</b></span>
    `;

const products = [
  {
    name: "samsung TV 50 inches",
    price: 1000,
    id: 1,
    description: "samsung TV 50 inches",
    thumbnail:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fblog.solidsignal.com%2Fnews%2Feditorials%2Fpicture-in-picture-2018-update%2F&psig=AOvVaw2hfDgrTbAmYeM-6vWK3mgz&ust=1718198519783000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIDhzLTS04YDFQAAAAAdAAAAABAE",
  },
  {
    name: "samsung TV 70 inches",
    price: 2000,
    id: 2,
    description: "samsung TV 50 inches",
    thumbnail:
      "https://i.picsum.photos/id/237/200/300.jpg?hmac=QKm9nLp7u2kDk9k7b4q9jW0pC8mRy9R5pXJpZJg5pYk",
  },
  {
    name: "samsung TV 80 inches",
    price: 3000,
    id: 3,
    description: "samsung TV 50 inches",
    thumbnail:
      "https://i.picsum.photos/id/237/200/300.jpg?hmac=QKm9nLp7u2kDk9k7b4q9jW0pC8mRy9R5pXJpZJg5pYk",
  },
];

const productHTML = document.getElementById("products");

let divProducts = "";
products.forEach(p => {
  divProducts += `
    <div>
        <h2>${p.name}</h2>
        <img src="${p.thumbnail}" alt="${p.name}"/>
        <span>$${p.price}</span>
        <p>${p.description}</p>
        <button>Buy</button>
    </div>
    <hr>
    `;
});

productHTML.innerHTML = divProducts;
