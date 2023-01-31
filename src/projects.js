export default class ProjectsPage {
    content = document.querySelector('#content');
    todoscontainer = document.querySelector('.todos-container');
    projectTitle = document.createElement('h1');
    constructor() {
        this.loadTitle();
        this.projects = [];
    }

    loadTitle () {
        this.projectTitle.textContent = 'Projects';
        this.todoscontainer.append(this.projectTitle);
    }
    
}