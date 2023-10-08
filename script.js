const taskInput = document.getElementById("task");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const listItem = document.createElement("li");
    listItem.innerHTML = `
        ${taskText}
        <button class="delete">Delete</button>
    `;

   
    const deleteButton = listItem.querySelector(".delete");
    deleteButton.addEventListener("click", () => {
        listItem.remove();
    });

    taskList.appendChild(listItem);
    taskInput.value = "";
}

addTaskButton.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});
