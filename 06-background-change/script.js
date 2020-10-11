const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  document.body.style.background = `rgb(${randomNumColor()},${randomNumColor()},${randomNumColor()})`;
});

const randomNumColor = () => Math.floor(Math.random() * 255);
