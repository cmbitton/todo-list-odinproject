export default class ToDoModal {
    content = document.querySelector('#content');
    modalContainer = document.createElement('div');
    modalHeader = document.createElement('h2');
    modalForm = document.createElement('form');
    constructor () {
        this.modalContainer.classList.add('new-todo-container', 'hidden');
        this.modalContainer.append(this.modalHeader, this.modalForm);
        this.content.append(this.modalContainer);

    }

    toggleModalVisibility () {
        this.modalContainer.classList.toggle('hidden');
    }

    openModal(e) {
        e.stopPropagation();
        this.toggleModalVisibility();
    }

    closeModal(e) {
        let reviewNode = e.target;
        let exitForm = true;
        while (reviewNode && reviewNode.nodeName !== 'BODY') {
          if (reviewNode.classList.contains('new-todo-container')) {
            exitForm = false;
            break;
          }
          reviewNode = reviewNode.parentNode;
        }
        if (exitForm && !this.modalContainer.classList.contains('hidden')) {
            this.modalContainer.classList.toggle('hidden')
        }
        return exitForm;
    }

    loadModalContent () {
        this.modalForm.innerHTML = '';
        this.modalHeader.textContent = 'New To Do';

        //title
        const nameContainer = document.createElement('div');
        const taskName = document.createElement('input');
        const taskNameLabel = document.createElement('label');
        taskName.setAttribute('name', 'todoname');
        taskName.setAttribute('id', 'todoname');
        taskNameLabel.setAttribute('for', 'todoname');
        taskNameLabel.textContent = 'Title';

        nameContainer.classList.add('todo-name-container');
        nameContainer.append(taskNameLabel, taskName);

        //Description
        const descriptionContainer = document.createElement('div');
        const taskDescription = document.createElement('textarea');
        const taskDescriptionLabel = document.createElement('label');
        taskDescription.setAttribute('name', 'tododescription');
        taskDescription.setAttribute('id', 'tododescription');
        taskDescriptionLabel.setAttribute('for', 'tododescription');
        taskDescriptionLabel.textContent = 'Description';

        descriptionContainer.classList.add('todo-description-container');
        descriptionContainer.append(taskDescriptionLabel, taskDescription);

        //date
        const dateContainer = document.createElement('div');
        const taskDate = document.createElement('input');
        const taskDateLabel = document.createElement('label');
        const currentDate = getCurrentDate();
        taskDate.setAttribute('type', 'date')
        taskDate.setAttribute('name', 'tododate');
        taskDate.setAttribute('id', 'tododate');
        taskDate.setAttribute('min', `${currentDate.year}-${currentDate.month}-${currentDate.day}`)
        taskDateLabel.setAttribute('for', 'tododate');
        taskDateLabel.textContent = 'Due Date';

        dateContainer.classList.add('todo-date-container');
        dateContainer.append(taskDateLabel, taskDate);

        //time
        const timeContainer = document.createElement('div');
        const taskTime = document.createElement('input');
        const taskTimeLabel = document.createElement('label');
        taskTime.setAttribute('type', 'time')
        taskTime.setAttribute('name', 'todotime');
        taskTime.setAttribute('id', 'todotime');
        taskTimeLabel.setAttribute('for', 'todotime');
        taskTimeLabel.textContent = 'Time Due';

        timeContainer.classList.add('todo-date-container');
        timeContainer.append(taskTimeLabel, taskTime);


        //addtodo button
        const todoSubmitButton = document.createElement('button');
        todoSubmitButton.classList.add('submit-todo-button')
        todoSubmitButton.textContent = 'Add ToDo';



        this.modalForm.append(nameContainer, descriptionContainer, dateContainer, timeContainer, todoSubmitButton);

    }
}

function getCurrentDate () {
    const date = new Date();
    const year = date.getFullYear();
    const day = date.getDate();
    let month = date.getMonth() + 1;
    if(month.toString.length < 2) month = '0' + month;
    return {year, month, day}
}