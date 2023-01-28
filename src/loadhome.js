export default class LandingPage {
    content = document.querySelector('#content');
    nav = document.querySelector('.navbar');
    menu = document.querySelector('.menu');
    constructor() {
        this.mainContent = new MainContent;
    }

    dimBackground() {
        this.nav.style.filter = 'brightness(50%)';
        this.menu.style.filter = 'brightness(50%)';
        this.mainContent.mainContentContainer.style.filter = 'brightness(50%)';
    }

    unDimBackground() {
        this.nav.removeAttribute('style');
        this.menu.removeAttribute('style');
        this.mainContent.mainContentContainer.removeAttribute('style');
    }

}


class MainContent {
    content = document.querySelector('#content');
    mainContentContainer = document.querySelector('.main-content-container');
    todoscontainer = document.querySelector('.todos-container');
    constructor() {

    }


    loadTodos(arr) {
        let i = 0;
        this.todoscontainer.innerHTML = '';
        for (const todo of arr) {
            const todoContainer = document.createElement('div');
            todoContainer.classList.add('todo-container');
            todoContainer.setAttribute('data-todo-index', i);
            if(todo.complete === true) todoContainer.classList.add('completed');
            i++
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

            //completion button
            const completed = document.createElement('button');
            completed.setAttribute('type', 'button')
            completed.classList.add('complete-button');
            if(todo.complete === true) completed.classList.add('completed');
            (todo.complete === false) ? completed.textContent = 'Not Completed' : completed.textContent = 'Completed';


            todoContainer.append(todoTitle, todoDescription, todoDate, todoTime, completed);
            this.todoscontainer.append(todoContainer);
        }
        this.addCompletionButtonEvent(arr);
    }

    addCompletionButtonEvent(arr) {
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
}

function formatTime(time) {
    if (+time.slice(0, 2) === 0) return (`${+time.slice(0, 2) + 12}:${time.slice(3, 5)} AM`);
    else if (+time.slice(0, 2) < 12) return (time += ' AM');
    else if (+time.slice(0, 2) === 12) return (`${time.slice(0, 2)}:${time.slice(3, 5)} PM`);
    else return (`${+time.slice(0, 2) - 12}:${time.slice(3, 5)} PM`);
}