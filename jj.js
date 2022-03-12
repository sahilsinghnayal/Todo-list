window.addEventListener("load", () => {
  const form = document.querySelector("#task-form");
  const input = document.querySelector("#task-input");
  const list = document.querySelector("#task-list");
  console.log(form);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    //preventDefault() is used not refresh the page
    console.log("submitted");
    const task = input.value;
    if (!task) {
      alert("Please enter a task");
      return;
    }
    let new_input_value=document.getElementById("task-input").value;
    let new_li=document.createElement("li");
    new_li.style.color="white";
    new_li.innerHTML=`<span>${new_input_value}</span><button onclick="deletetask(event)">delete</button>`;
    console.log(new_li.innerhtml);
    document.getElementById("text").append(new_li);
    
    
});
function deletetask(event){
    let parentnodeoftem=event.target.parentnode;
    console.log(parentnodeoftem);
    if(parentnodeoftem){
        parentnodeoftem.remove();
    }
}
});
