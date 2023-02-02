import { formatTime } from "./loadhome";

export default class ProjectsPage {
    content = document.querySelector('#content');
    mainContainer = document.querySelector('.main-content-container');
    todosContainer = document.querySelector('.todos-container');
    projectTitle = document.createElement('h1');
    projectsList = [];
    constructor() {
        this.projects = [];
    }

    loadTitle() {
        this.projectTitle.classList.add('project-title');
        this.projectTitle.textContent = 'Projects';
        this.mainContainer.insertAdjacentElement('afterbegin', this.projectTitle);
    }

    loadProjectContainers() {
        for (const project of this.projectsList) {
            const projectContainer = document.createElement('div');
            const projectTitle = document.createElement('h2');
            projectContainer.classList.add('project-container');
            projectContainer.setAttribute('data-project-name', project)
            projectTitle.textContent = project;
            projectContainer.append(projectTitle);
            this.todosContainer.append(projectContainer);
        }
    }

    loadTodosForProject(arr) {
        let i = 0;
        for (const todo of arr) {
            const todoContainer = document.createElement('div');
            todoContainer.classList.add('todo-container');
            todoContainer.setAttribute('data-todo-index', i);
            if (todo.complete === true) todoContainer.classList.add('completed');
            i++
            //title
            const todoTitle = document.createElement('h2');
            todoTitle.classList.add('todo-title');
            todoTitle.textContent = todo.title;

            //description
            const todoDescription = document.createElement('p');
            todoDescription.classList.add('todo-description');
            todoDescription.textContent = todo.description;

            //date
            const todoDate = document.createElement('p');
            todoDate.classList.add('todo-date');
            todoDate.innerHTML = `<span class="due-date-label">Due Date: </span> ${todo.dueDate.slice(5, 7)}/${todo.dueDate.slice(8, 11)}/${todo.dueDate.slice(0, 4)}`;

            //time
            const todoTime = document.createElement('p');
            todoTime.classList.add('todo-time');
            if (todo.time !== '') {
                todoTime.innerHTML = `<span class="due-time-label">Time Due: </span>${formatTime(todo.time)}`;
            }
            else {
                todoTime.innerHTML = `<span class="due-time-label">Time Due: </span> No Time Set`;
            }




            //completion button
            const completed = document.createElement('button');
            completed.setAttribute('type', 'button')
            completed.classList.add('complete-button');
            if (todo.complete === true) completed.classList.add('completed');
            (todo.complete === false) ? completed.textContent = 'Not Completed' : completed.textContent = 'Completed';

            //options menu
            const optionsMenuContainer = document.createElement('div');
            optionsMenuContainer.classList.add('todo-options');
            optionsMenuContainer.innerHTML = '<span class="material-symbols-outlined todo-options-icon">more_vert</span>';

            //options
            const optionsContainer = document.createElement('div');
            const removeTodo = document.createElement('div');
            removeTodo.textContent = 'Remove';
            removeTodo.classList.add('remove-todo');
            optionsContainer.classList.add('todo-options-container', 'hidden');
            optionsContainer.append(removeTodo);



            optionsMenuContainer.append(optionsContainer);
            todoContainer.append(todoTitle, todoDescription, todoDate, todoTime, completed, optionsMenuContainer);
            this.addTodosToProjectContainers(todo.projectName, todoContainer);

        }
    }

    addTodosToProjectContainers(projectName, todoContainer) {
        const projectContainers = document.querySelectorAll('.project-container');
        for (const container of projectContainers){
                if (projectName === container.getAttribute('data-project-name')) {
                    container.append(todoContainer);
                }
            }
    }

}


