import { default as LandingPage } from "./loadhome.js";
import ToDo from "./tasks.js";
import ToDoModal from "./todomodal.js";

const landingLoader = new LandingPage();
const todomodal = new ToDoModal();
const todosList = [];
const modalContainer = document.querySelector('.new-todo-container');
const newTodoButton = document.querySelector('.add-todo-button');
const submitTodoButton = document.querySelector('.submit-todo-button');

//opens the add new todo modal
newTodoButton.addEventListener('click', (e) => {
    if (modalContainer.classList.contains('hidden')) {
        todomodal.openModal(e);
        todomodal.clearModalContent();
        landingLoader.dimBackground();

    }
});


//closes add new todo modal
window.addEventListener('click', (e) => {
    const closed = todomodal.closeModal(e);
    if (closed) landingLoader.unDimBackground();

})






submitTodoButton.addEventListener('click', (e) => {
    let isFormValid = document.querySelector('form').checkValidity();
    if(!isFormValid) {
        document.querySelector('form').reportValidity();
        e.stopPropagation();
    }
    else{ 
    e.preventDefault();
        const todoTitle = document.querySelector('#todoname').value;
        const todoDescription = document.querySelector('#tododescription').value;
        const todoDate = document.querySelector('#tododate').value;
        const todoTime = document.querySelector('#todotime').value;
        const todo = new ToDo(todoTitle, todoDescription, todoDate, todoTime, false);
        todosList.push(todo);
        console.log(todosList)
        landingLoader.mainContent.loadTodos(todosList);
        todomodal.closeModal(e);
        showTodoOptions();
        addCompletionButtonEvent(todosList);
        removeTodo();
        landingLoader.dimBackground();
    }
    })



function removeTodo () {
    const removeButtons = document.querySelectorAll('.remove-todo');
    for(const button of removeButtons){
        button.addEventListener('click', (e) => {
            const todoContainer = e.target.parentNode.parentNode.parentNode;
            const todoindex = +todoContainer.getAttribute('data-todo-index');
            todosList.splice(todoindex, 1);
            landingLoader.mainContent.loadTodos(todosList);
            showTodoOptions();
            addCompletionButtonEvent(todosList);
            removeTodo();
        })
    }
}


function addCompletionButtonEvent(arr) {
    const completionButton = document.querySelectorAll('.complete-button');
    for (const button of completionButton) {
        button.addEventListener('click', (e) => {
            if (button.classList.contains('completed')) {
                button.classList.remove('completed');
                button.textContent = 'Not Completed'
                e.target.parentNode.classList.remove('completed');
                arr[e.target.parentNode.getAttribute('data-todo-index')].complete = false;
            }
            else {
                button.classList.add('completed');
                e.target.parentNode.classList.add('completed');
                button.textContent = 'Completed';
                arr[e.target.parentNode.getAttribute('data-todo-index')].complete = true;
            };
        })
    }
}

function showTodoOptions() {
    const todoOptionButton = document.querySelectorAll('.todo-options-icon');
    for (const button of todoOptionButton) {
        button.addEventListener('click', (e) => {
            const todo = e.target.parentNode;
            const options = todo.querySelector('.todo-options-container');
            (options.classList.contains('hidden')) ? options.classList.remove('hidden') : options.classList.add('hidden');
        })
    }
}