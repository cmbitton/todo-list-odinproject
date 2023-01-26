export default class ToDoModal {
    content = document.querySelector('#content');
    modalContainer = document.createElement('div');
    constructor () {
        this.modalContainer.classList.add('new-todo-container', 'hidden');
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
}