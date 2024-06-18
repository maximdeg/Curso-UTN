const btnBuy = document.getElementById("btn-buy");
const divCounter = document.getElementById("counter-container");
const btnIncrement = document.getElementById("btn-increment");
const btnDecrement = document.getElementById("btn-decrement");
const spanNums = document.getElementById("span-numbers");

let counter = 1;

const renderCounter = () => {
  spanNums.innerText = counter;
};
// RENDERS
const renderButtons = () => {
  divCounter.style.display = "flex";
};

const renderBuyButton = () => {
  btnBuy.style.display = "flex";
};
// HIDES
const hideQuantityButtons = () => {
  divCounter.style.display = "none";

  renderBuyButton();
};
const hideBuyButton = () => {
  btnBuy.style.display = "none";
  renderButtons();
};

// HANDLERS
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

// LISTENERS
btnBuy.addEventListener("click", hideBuyButton);

btnIncrement.addEventListener("click", handlerIncrementCounter);

btnDecrement.addEventListener("click", handlerDecrementButton);
