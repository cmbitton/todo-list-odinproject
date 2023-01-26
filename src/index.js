import { default as LandingPage } from "./loadhome.js";
import ToDoModal from "./todomodal.js";

const landingLoader = new LandingPage;
const todomodal = new ToDoModal;
landingLoader.navMenu.loadNav();
landingLoader.navMenu.loadMenu();
landingLoader.mainContent.loadMainContent();

const newTodoButton = document.querySelector('.add-todo-button');

//opens the add new todo modal
newTodoButton.addEventListener('click', (e) => {
    if (todomodal.modalContainer.classList.contains('hidden')) {
        todomodal.openModal(e);
        landingLoader.dimBackground();
    }
});


//closes add new todo modal
window.addEventListener('click', (e) => {
    const closed = todomodal.closeModal(e);
    if (closed) landingLoader.unDimBackground();
})