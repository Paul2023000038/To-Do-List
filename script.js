function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `${taskText} <button class="delete-btn" onclick="removeTask(this)">&times;</button>`;
  document.getElementById("taskList").appendChild(li);

  taskInput.value = "";
}

function removeTask(btn) {
  const li = btn.parentElement;
  li.remove();
}
