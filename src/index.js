import { default as LandingPage } from "./loadhome.js";
import ToDo from "./tasks.js";
import ToDoModal from "./todomodal.js";

const landingLoader = new LandingPage();
const todomodal = new ToDoModal();
const todosList = [];
landingLoader.navMenu.loadNav();
landingLoader.navMenu.loadMenu();
landingLoader.mainContent.loadMainContent();

const newTodoButton = document.querySelector('.add-todo-button');

//opens the add new todo modal
newTodoButton.addEventListener('click', (e) => {
    if (todomodal.modalContainer.classList.contains('hidden')) {
        todomodal.openModal(e);
        todomodal.loadModalContent();
        landingLoader.dimBackground();
        addTodoToList();
    }
});


//closes add new todo modal
window.addEventListener('click', (e) => {
    const closed = todomodal.closeModal(e);
    if (closed) landingLoader.unDimBackground();

})




function addTodoToList() {
    const submitTodoButton = document.querySelector('.submit-todo-button');
    submitTodoButton.addEventListener('click', (e) => {
        e.preventDefault();
        const todoTitle = document.querySelector('#todoname').value;
        const todoDescription = document.querySelector('#tododescription').value;
        const todoDate = document.querySelector('#tododate').value;
        const todoTime = document.querySelector('#todotime').value;
        const todo = new ToDo(todoTitle, todoDescription, todoDate, todoTime);
        todosList.push(todo);
        landingLoader.mainContent.loadTodos(todosList);
        todomodal.closeModal(e);
        landingLoader.dimBackground();
    })

}

