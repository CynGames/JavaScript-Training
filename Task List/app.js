// Define UI Vars
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// Load all event listeners
loadEventListeners();

function loadEventListeners() {
  // DOM Load event
  document.addEventListener("DOMContentLoaded", getTasks);

  // Add task event
  form.addEventListener("submit", addTask);

  // Remove task event
  taskList.addEventListener("click", removeTask);

  // Clear task event
  clearBtn.addEventListener("click", clearTasks);

  // Filter tasks event
  filter.addEventListener("keyup", filterTasks);
}

function getTasks() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  }
  else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(function (task) {
    // Create li Element 
    const li = document.createElement("li");

    // Add class
    li.className = "collection-item";

    // Create text node and append to li
    li.appendChild(document.createTextNode(task));

    // Create a link element
    const link = document.createElement("a");

    // Add className
    link.className = "delete-item secondary-content";

    // Add icon html
    link.innerHTML = "<i class='fa fa-remove'></i>"

    // Append the link to li
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);
  })
}

function addTask(event) {

  if (taskInput.value === "") {
    alert("Please add a task");

    return;
  }

  // Create li Element 
  const li = document.createElement("li");

  // Add class
  li.className = "collection-item";

  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));

  // Create a link element
  const link = document.createElement("a");

  // Add className
  link.className = "delete-item secondary-content";

  // Add icon html
  link.innerHTML = "<i class='fa fa-remove'></i>"

  // Append the link to li
  li.appendChild(link);

  // Append li to ul
  taskList.appendChild(li);

  // Store local storage 
  storeTaskInLocalStorage(taskInput.value);

  // Clear input
  taskInput.value = "";

  event.preventDefault();
}

function removeTask(event) {
  if (event.target.parentElement.classList.contains("delete-item")) {
    if (confirm(`Are you sure you want to delete ${event.target.parentElement.parentElement.textContent}?`))
      event.target.parentElement.parentElement.remove();

    // Remove task from localstorage
    removeTaskFromLocalStorage(event.target.parentElement.parentElement);
  }
}

function clearTasks(event) {
  // Forma facil de hacerlo
  // taskList.innerHTML = '';

  // Forma rapida de hacerlo
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  // Clear from LocalStorage
  clearTasksFromStorage();

  event.preventDefault();
}

function clearTasksFromStorage() {
  localStorage.clear();
}

function filterTasks(event) {
  const text = event.target.value.toLowerCase();

  document.querySelectorAll(".collection-item").forEach(function (task) {
    const item = task.firstChild.textContent;

    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}

function storeTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  }
  else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  }
  else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(function (task, index) {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}