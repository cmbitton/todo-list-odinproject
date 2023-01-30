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
        landingLoader.dimBackground();
    }
    })



