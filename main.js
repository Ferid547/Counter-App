document.querySelector("#add-btn").addEventListener("click", () => {
  let countValue = document.querySelector("#count-value").value;
  let count = document.querySelector("#count").textContent;
  let result = Number(countValue) + Number(count);
  document.querySelector("#count").innerHTML = result;
  document.querySelector("#count-value").value = "";
});

document.querySelector("#decrement").addEventListener("click", () => {
  let count = document.querySelector("#count").textContent;
  let result = Number(count) - 1;
  document.querySelector("#count").innerHTML = result;
  document.querySelector("#count-value").value = "";
});

document.querySelector("#plus").addEventListener("click", () => {
  let count = document.querySelector("#count").textContent;
  let result = Number(count) + 1;
  document.querySelector("#count").innerHTML = result;
  document.querySelector("#count-value").value = "";
});

document.querySelector("#reset").addEventListener("click", () => {
  document.querySelector("#count").innerHTML = "0";
});
