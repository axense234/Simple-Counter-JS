const buttons = document.getElementById("buttons-div");
const number = document.querySelector("p");

const decreaseButton = buttons.children[0];
const resetButton = buttons.children[1];
const increaseButton = buttons.children[2];

// console.log(decreaseButton, resetButton, increaseButton);

function verifyNumber() {
  if (number.innerText < 0) {
    number.style.color = "red";
  } else if (number.innerText == 0) {
    number.style.color = "hotpink";
  } else if (number.innerText > 0) {
    number.style.color = "green";
  }
}

decreaseButton.addEventListener("click", function () {
  number.innerText--;
  verifyNumber();
});

resetButton.addEventListener("click", function () {
  number.innerText = 0;
  verifyNumber();
});

increaseButton.addEventListener("click", function () {
  number.innerText++;
  verifyNumber();
});
