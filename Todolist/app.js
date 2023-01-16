//! selectors
const todoInput = document.querySelector(".todo-input");
const ul = document.querySelector(".todo-list");
const todoButton = document.querySelector(".todo-button");
const todoFilter = document.querySelector(".filter-todo");

const alertWarning = document.querySelector(".alert-warning");
const alertSuccess = document.querySelector(".alert-success");

//! events

todoButton.addEventListener("click", addTodo);
ul.addEventListener("click", checkButton);
todoFilter.addEventListener("click", filterTodo);

//! function

function addTodo(e) {
  e.preventDefault();

  const inputErr = (str) => !str.trim().length;

  if (inputErr(todoInput.value)) {
    alertWarning.style.display = "flex";
    setTimeout(() => {
      alertWarning.style.display = "none";
    }, 3000);
    todoInput.value = "";
  } else {
    alertSuccess.style.display = "flex";
    setTimeout(() => {
      alertSuccess.style.display = "none";
    }, 3000);

    const liWrapper = document.createElement("div");
    liWrapper.classList.add("todo");

    const completedButton = document.createElement("button");
    completedButton.classList.add("complete-btn");
    completedButton.innerHTML = "<i class= 'fas fa-check-circle'></i>";
    liWrapper.appendChild(completedButton);

    const li = document.createElement("li");
    li.textContent = todoInput.value;
    li.classList.add("todo-item");
    liWrapper.appendChild(li);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("trash-btn");
    deleteButton.innerHTML = "<i class= 'fas fa-minus-circle'></i>";
    liWrapper.appendChild(deleteButton);

    ul.appendChild(liWrapper);

    todoInput.value = "";
  }
}

function checkButton(e) {
  let item = e.target;

  if (item.classList[0] == "trash-btn") {
    const todo = item.parentElement;
    todo.remove();
  }
  if (item.classList[0] == "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(e) {
  const todos = ul.childNodes;
  todos.forEach(function (item) {
    switch (e.target.value) {
      case "all":
        item.style.display = "flex";
        break;
      case "completed":
        if (item.classList.contains("completed")) {
          item.style.display = "flex";
        } else {
          item.style.display = "none";
        }
        break;
        case "uncompleted":
          if(!item.classList.contains("completed")) {
            item.style.display = "flex"
          }else{
            item.style.display = "none"
          }
    }
  });
}
