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
// clicked task button
// getTaskButton("task-button-1");
// getTaskButton("task-button-2");
// getTaskButton("task-button-3");
// getTaskButton("task-button-4");
// getTaskButton("task-button-5");
// getTaskButton("task-button-6");

document.getElementById("task-button-1").addEventListener("click", function () {
  document.getElementById("task-button-1").setAttribute("disabled", true);
  const taskTitle = document.getElementById("task-title").innerText;
  const taskDescription = document.getElementById("task-description").innerText;
  const taskNumber = document.getElementById("task-number").innerText;
  const convertedTaskNumber = parseInt(taskNumber);
  const number = convertedTaskNumber - 1;
  document.getElementById("task-number").innerText = number;
  const taskCount = document.getElementById("task-count").innerText;
  const convetredTaskCount = parseInt(taskCount);
  const totalTaskCount = convetredTaskCount + 1;
  document.getElementById("task-count").innerText = totalTaskCount;
  const taskContainer = document.getElementById("task-container");
  const p = document.createElement("p");
  p.classList.add("text-xl", "font-bold", "mt-6");
  p.innerText = `${taskTitle} ${taskDescription}`;
  taskContainer.appendChild(p);
});
