//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click', deleteCheck);

//Functions

function addTodo(event){
    //Prevent form from submitting
    event.preventDefault();
    //Todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //create LI
    const newTodo = document.createElement('li');
    //newTodo.innerText = 'hey';
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //Check Mark Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="far fa-thumbs-up"></i>';
    completedButton.classList.add("completed-btn");
    todoDiv.appendChild(completedButton);
    //Check trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //Append to list
    todoList.appendChild(todoDiv);

    //clear todo input value
    todoInput.value="";
}


function deleteCheck(e){
    //console.log(e.target);
    const item=e.target;
    // delete todo
    if(item.classList[0] === "trash-btn"){
       // item.remove();   //only remove the trash box item
       const todo = item.parentElement;
       // animation
       todo.classList.add("fall");
       //todo.remove();
       todo.addEventListener('transitionend', function(){  // transitionend is aspecial event listener  
         todo.remove();  
       });
    }



//check mark
if(item.classList[0] === "completed-btn"){
    const todo = item.parentElement;
    todo.classList.toggle('completed');
}

}