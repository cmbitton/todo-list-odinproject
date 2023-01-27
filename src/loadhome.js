export default class LandingPage {
    content = document.querySelector('#content');
    constructor () {
        this.navMenu = new Navigation;
        this.mainContent = new MainContent;
    }

    dimBackground () {
        this.navMenu.menu.style.filter = 'brightness(50%)';
        this.navMenu.navbar.style.filter = 'brightness(50%)';
        this.mainContent.mainContentContainer.style.filter = 'brightness(50%)';
    }

    unDimBackground () {
        this.navMenu.menu.removeAttribute('style');
        this.navMenu.navbar.removeAttribute('style');
        this.mainContent.mainContentContainer.removeAttribute('style');
    }

}


class Navigation {
    content = document.querySelector('#content');
    navbar = document.createElement('div');
    logo = document.createElement('h3');
    menuButtonContainer = document.createElement('div');
    menu = document.createElement('div');
    home = document.createElement('p');
    projects = document.createElement('p');
    constructor () {

    }

    loadNav () {
        this.navbar.classList.add('navbar');
        this.logo.classList.add('logo');
        this.logo.textContent = 'Your Logo';
        this.navbar.append(this.logo);
        this.content.append(this.navbar);

    }

    loadMenu () {
        this.menu.classList.add('menu');
        this.menuButtonContainer.classList.add('nav-button-container');
        this.home.classList.add('home', 'navbutton', 'button-selected');
        this.projects.classList.add('projects', 'navbutton');

        this.home.textContent = 'Home';
        this.projects.textContent = 'Projects';

        this.menuButtonContainer.append(this.home, this.projects)
        this.menu.append(this.menuButtonContainer)
        this.content.append(this.menu);
    }


}

class MainContent {
    content = document.querySelector('#content');
    mainContentContainer = document.createElement('div');
    todoscontainer = document.createElement('div');
    addTodoButton = document.createElement('div');
    constructor () {

    }

    loadMainContent () {
        this.mainContentContainer.classList.add('main-content-container');
        this.addTodoButton.classList.add('add-todo-button');
        this.todoscontainer.classList.add('todos-container');
        this.addTodoButton.textContent = 'New Todo +'

        this.mainContentContainer.append(this.addTodoButton, this.todoscontainer);
        this.content.append(this.mainContentContainer);
    }

    loadTodos (arr) {
        this.todoscontainer.innerHTML = '';
        for(const todo of arr){
            const todoContainer = document.createElement('div');
            todoContainer.classList.add('todo-container');

            //title
            const todoTitle = document.createElement('h2');
            todoTitle.classList.add('todo-title');
            todoTitle.textContent = todo.title;

            //description
            const todoDescription = document.createElement('p');
            todoDescription.classList.add('todo-description');
            todoDescription.textContent = todo.description;

            //description
            const todoDate = document.createElement('p');
            todoDate.classList.add('todo-date');
            todoDate.innerHTML = `<span class="due-date-label">Due Date: </span> ${todo.dueDate.slice(5, 7)}/${todo.dueDate.slice(8, 11)}/${todo.dueDate.slice(0, 4)}`;

            //description
            const todoTime = document.createElement('p');
            todoTime.classList.add('todo-time');
            todoTime.innerHTML = `<span class="due-time-label">Time Due: </span>${formatTime(todo.time)}`;


            todoContainer.append(todoTitle, todoDescription, todoDate, todoTime);
            this.todoscontainer.append(todoContainer);

        }
    }
}

function formatTime (time){
    if (+time.slice(0, 2) === 0) return (`${+time.slice(0, 2) + 12}:${time.slice(3, 5)} AM`);
    else if(+time.slice(0, 2) < 12) return (time+= ' AM');
    else if(+time.slice(0, 2) === 12) return (`${time.slice(0, 2)}:${time.slice(3, 5)} PM`);
    else return (`${+time.slice(0, 2) - 12}:${time.slice(3, 5)} PM`);
}