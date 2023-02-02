import { default as LandingPage } from "./loadhome.js";
import ProjectsPage from "./projects.js";
import ToDo from "./tasks.js";
import ToDoModal from "./todomodal.js";


const landingLoader = new LandingPage();
const todomodal = new ToDoModal();
const projects = new ProjectsPage();
const todosList = [];
const todoContainer = document.querySelector('.todos-container');
const modalContainer = document.querySelector('.new-todo-container');
const newTodoButton = document.querySelector('.add-todo-button');
const submitTodoButton = document.querySelector('.submit-todo-button');
const projectsButton = document.querySelector('.projects');
const projectSelection = document.querySelector('#project-selection');
const homeButton = document.querySelector('.home');

//resets html select for newtodo project selection
function resetNewTodoProjectSelection() {
    const projectNameContainer = document.querySelector('.project-name-container');
    const projectTitle = document.querySelector('#project-name')
    if (projectSelection.value === 'New Project') {
        if (projectNameContainer.classList.contains('hidden')) projectNameContainer.classList.remove('hidden');
        projectTitle.value = '';
    }
    else {
        if (!projectNameContainer.classList.contains('hidden')) projectNameContainer.classList.add('hidden');
    }
}
//event listeners
//opens the add new todo modal
newTodoButton.addEventListener('click', (e) => {
    if (modalContainer.classList.contains('hidden')) {
        todomodal.openModal(e);
        todomodal.clearModalContent();
        landingLoader.dimBackground();
        //resets default project selection
        projectSelection.value = 'none';
        resetNewTodoProjectSelection();
    }
});


//closes add new todo modal
window.addEventListener('click', (e) => {
    const closed = todomodal.closeModal(e);
    if (closed) landingLoader.unDimBackground();

})

homeButton.addEventListener('click', () => {
    landingLoader.mainContent.loadTodos(todosList);
    projectsButton.classList.remove('button-selected');
    homeButton.classList.add('button-selected');
    showTodoOptions();
    addCompletionButtonEvent(todosList);
    addRemoveTodoListener();
    if (document.querySelector('.project-title') !== null) document.querySelector('.project-title').remove();
})

projectsButton.addEventListener('click', () => {
    todoContainer.innerHTML = '';
    homeButton.classList.remove('button-selected');
    projectsButton.classList.add('button-selected');
    projects.loadTitle();
    reloadProjectTodos();
})

projectSelection.addEventListener('change', () => {
    resetNewTodoProjectSelection();
})

submitTodoButton.addEventListener('click', (e) => {
    let isFormValid = document.querySelector('form').checkValidity();
    if (!isFormValid) {
        document.querySelector('form').reportValidity();
        e.stopPropagation();
    }
    else {
        e.preventDefault();
        const todoTitle = document.querySelector('#todoname').value;
        const todoDescription = document.querySelector('#tododescription').value;
        const todoDate = document.querySelector('#tododate').value;
        const todoTime = document.querySelector('#todotime').value;
        let projectName = document.querySelector('#project-name').value;
        (projectName === '') ? projectName = 'None' : projectName = projectName;
        const todo = new ToDo(todoTitle, todoDescription, todoDate, todoTime, false, projectName);
        todosList.push(todo);
        if (!projects.projectsList.includes(projectName) && projectName !== 'None') projects.projectsList.push(projectName);
        console.log(todosList)
        todomodal.closeModal(e);
        landingLoader.dimBackground();
        if (homeButton.classList.contains('button-selected')) {
            landingLoader.mainContent.loadTodos(todosList);
            showTodoOptions();
            addCompletionButtonEvent(todosList);
            addRemoveTodoListener();
        }
        else {
            document.querySelector('.todos-container').innerHTML = '';
            reloadProjectTodos();
        }

    }
})



function addRemoveTodoListener() {
    const removeButtons = document.querySelectorAll('.remove-todo');
    for (const button of removeButtons) {
        button.addEventListener('click', (e) => {
            const todoContainer = e.target.parentNode.parentNode.parentNode;
            const todoindex = +todoContainer.getAttribute('data-todo-index');
            todosList.splice(todoindex, 1);
            if (homeButton.classList.contains('button-selected')) {
                landingLoader.mainContent.loadTodos(todosList);
                showTodoOptions();
                addCompletionButtonEvent(todosList);
                addRemoveTodoListener();
            }
            else{
                document.querySelector('.todos-container').innerHTML = '';
                reloadProjectTodos();

            }

        })
    }
}

function reloadProjectTodos () {
    const projectTodos = todosList.filter(a => a.projectName !== 'None');
    projects.loadProjectContainers();
    projects.loadTodosForProject(projectTodos);
    addCompletionButtonEvent(projectTodos);
    showTodoOptions();
    addRemoveTodoListener();
    const projectContainers = document.querySelectorAll('.project-container');
    for(const projectContainer of projectContainers){
    if(projectContainer.childElementCount === 1) {
        projectContainer.remove();
    }
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