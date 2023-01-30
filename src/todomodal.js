export default class ToDoModal {
    content = document.querySelector('#content');
    modalContainer = document.querySelector('.new-todo-container');
    constructor() {

    }

    toggleModalVisibility() {
        this.modalContainer.classList.toggle('hidden');
    }

    openModal(e) {
        e.stopPropagation();
        this.toggleModalVisibility();
    }

    closeModal(e) {
        let reviewNode = e.target;
        let exitForm = true;
        if (!e.target.classList.contains('submit-todo-button')) {
            while (reviewNode && reviewNode.nodeName !== 'BODY') {
                if (reviewNode.classList.contains('new-todo-container')) {
                    exitForm = false;
                    break;
                }
                reviewNode = reviewNode.parentNode;
            }
        }
        if (exitForm && !this.modalContainer.classList.contains('hidden')) {
            this.modalContainer.classList.toggle('hidden')
        }
        return exitForm;
    }

    loadModalContent() {
        //date
        const taskDate = document.querySelector('#tododate');
        const currentDate = getCurrentDate();
        taskDate.setAttribute({'min': `${currentDate.year}-${currentDate.month}-${currentDate.day}`, 'required': true})

    }

    clearModalContent() {
        document.querySelector('#todoname').value = '';
        document.querySelector('#tododescription').value = '';
        document.querySelector('#tododate').value = '';
        document.querySelector('#todotime').value = '';

    }
}

function getCurrentDate() {
    const date = new Date();
    const year = date.getFullYear();
    const day = date.getDate();
    let month = date.getMonth() + 1;
    if (month.toString.length < 2) month = '0' + month;
    return { year, month, day }
}