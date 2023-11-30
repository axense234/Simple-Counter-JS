const counterElement = document.getElementById("counter");

const decreaseButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");
const increaseButton = document.getElementById("increase");

let counter = 0;

const updateCounterElement = () => {
  counterElement.innerText = counter;

  if (counter < 0) {
    counterElement.style.color = "red";
  } else if (counter === 0) {
    counterElement.style.color = "black";
  } else if (counter > 0) {
    counterElement.style.color = "green";
  }
};

// Decrease
decreaseButton.addEventListener("click", () => {
  counter--;

  updateCounterElement();
});

// Reset
resetButton.addEventListener("click", () => {
  counter = 0;

  updateCounterElement();
});

// Increase
increaseButton.addEventListener("click", () => {
  counter++;

  updateCounterElement();
});
