document.getElementById("QNA-box").addEventListener("click", function () {
  window.location.href = "./main.html";
});

document
  .getElementById("change-bg-color-btn")
  .addEventListener("click", function () {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.getElementById("body").style.backgroundColor = randomColor;
  });
