document.addEventListener('DOMContentLoaded', () =>{
    const taskInput =document.getElementById('new-task');
    const addTaskButton=document.getElementById('add-task');
    const taskList=document.getElementById('task-list');
    // Add even listener for adding a task
    addTaskButton.addEventListener('click',()=>{
        const taskText =taskInput.value.trim();
        if(taskText !== ''){
            addTask(taskText);
            taskInput.value= '';
        }

    });
    taskList.addEventListener('click',(Event)=>{
        if(Event.target.tagName === 'BUTTON'){
            deleteTask(Event.target.parentElement);
        }
        else if(Event.target.tagName === 'LI'){
            toggleComplete(Event.target);      
        }

    });
    function addTask(taskText){
        const li = document.createElement('li');
        li.textContent=taskText;
        const deleteButton=document.createElement('button');
        deleteButton.textContent='Delete';
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    }
    function deleteTask(taskElement){
        taskList.removeChild(taskElement);
    }
    function toggleComplete(taskElement){
        taskElement.classList.toggle('completed');
    }

});