const todoinput = document.querySelector(".todo-input");
const todobutton = document.querySelector(".todo-button");
const todolist = document.querySelector(".todo-list");
const filter = document.querySelector(".filter-todo");

//event listeners
todobutton.addEventListener("click", addtodo);
todolist.addEventListener("click", deleteCheck);
filter.addEventListener("click", filtertodo);

//functions
function addtodo(event) {
  //preventDefault refersh doesnt work on page.
  event.preventDefault();
  console.log("button clicked");
  if (!todoinput.value) {
    alert("please enter a todo");
    return;
  }
  //todo div
  const tododiv = document.createElement("div");
  tododiv.classList.add("todo");
  //create li
  const newtodo = document.createElement("li");
  newtodo.innerText = todoinput.value;
  newtodo.classList.add("todo-item");
  // adding new todo to the tododiv
  tododiv.appendChild(newtodo);
  //check mark button
  const completedbutton = document.createElement("button");
  completedbutton.innerHTML = "Done";
  completedbutton.classList.add("complete-btn");
  tododiv.appendChild(completedbutton);
  //delete button
  const deletebutton = document.createElement("button");
  deletebutton.innerHTML = "Delete";
  deletebutton.classList.add("delete-btn");
  tododiv.appendChild(deletebutton);
  //append to list
  todolist.appendChild(tododiv);
  //clear input
  todoinput.value = "";
}

function deleteCheck(e) {
  const item = e.target; ///e.target refers to the element that triggered the event
  //delete todo
  if (item.classList[0] === "delete-btn") {
    const todo = item.parentElement; //parentElement refers to the parent element of the element that triggered the event

    todo.remove();
  }
  //completed
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
function filtertodo(e) {
  let todos = todolist.children;
  todos=Object.values(todos);
  todos.filter((todo) => {
    // console.log(e.target.value);
    switch (e.target.value) {
      case "all":
       
        todo.style.display = "flex";
        break;
      case "completed":
        console.log(todo.classList ,"sahil");
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {  todo.style.display = "none";
        }
        break;

    }
  });
  
  // todolist.childNode=todos;
}
