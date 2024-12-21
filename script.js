const count = document.querySelector(".value");
const minusBtn = document.querySelector("#decrement");
const plusBtn = document.querySelector("#increment");
const changeBy = document.querySelector("#changeBy");
const resetBtn = document.querySelector("#reset");

minusBtn.addEventListener("click", () => {
  const countValue = parseInt(count.innerText);
  const changeByValue = parseInt(changeBy.value);
  count.innerText = countValue - changeByValue;
});

plusBtn.addEventListener("click", () => {
  const countValue = parseInt(count.innerText);
  const changeByValue = parseInt(changeBy.value);
  count.innerText = countValue + changeByValue;
});

resetBtn.addEventListener("click", () => {
  count.innerText = 0;
});
