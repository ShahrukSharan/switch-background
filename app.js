const colors = ["#f15025", "#40407a", "#706fd3", "#f7f1e3", "#34ace0", "#33d9b2", "#2c2c54", "#474787", "#227093", "#218c74", "#218c74", "#ff5252", "#ff793f", "#ffb142", "#fff200", "#3d3d3d", "#ff3838"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
