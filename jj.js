window.addEventListener('load', ()=> {
    const form=document.querySelector("#task-form");
    const input=document.querySelector("#task-input");
    const list=document.querySelector("#task-list");
    console.log(form);
    form.addEventListener('submit' ,(e)=>{
        e.preventDefault();
        //preventDefault() is used not refresh the page 
        console.log("submitted");
        const task = input.value;
        if(!task){
            alert("Please enter a task");
            return
        }
    });
});