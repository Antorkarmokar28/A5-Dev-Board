document.getElementById("QNA-box").addEventListener("click", function () {
  window.location.href = "./main.html";
});
// random background color changed
document
  .getElementById("change-bg-color-btn")
  .addEventListener("click", function () {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById("body").style.backgroundColor = randomColor;
  });
// show dynamic date
function updateDate() {
  const today = new Date();
  const formatted = today.toDateString();
  document.getElementById("show-date").innerText = formatted;
}
updateDate();

setInterval(updateDate, 1000);
