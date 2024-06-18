const btnBuy = document.getElementById("btn-buy");
const btnIncrement = document.getElementById("btn-increment");
const btnDecrement = document.getElementById("btn-decrement");
const spanNums = document.getElementById("span-numbers");

let counter = 1;

const renderCounter = () => {
  spanNums.innerText = counter;
};

const renderButtons = () => {
  btnIncrement.style.display = "initial";
  btnDecrement.style.display = "initial";
  spanNums.style.display = "initial";
};

const renderBuyButton = () => {
  btnBuy.style.display = "initial";
};

const hideQuantityButtons = () => {
  btnIncrement.style.display = "none";
  btnDecrement.style.display = "none";
  spanNums.style.display = "none";

  renderBuyButton();
};
const hideBuyButton = () => {
  btnBuy.style.display = "none";
  renderButtons();
};

const handlerIncrementCounter = () => {
  counter++;

  renderCounter();
};

const handlerDecrementButton = () => {
  if (counter > 1) {
    counter--;
    renderCounter();
  } else {
    hideQuantityButtons();
  }
};

btnBuy.addEventListener("click", e => {
  e.preventDefault();

  hideBuyButton();
});

btnIncrement.addEventListener("click", e => {
  e.preventDefault();

  handlerIncrementCounter();
});

btnDecrement.addEventListener("click", e => {
  e.preventDefault();

  handlerDecrementButton();
});
