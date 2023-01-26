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
    addTodoButton = document.createElement('div');
    constructor () {

    }

    loadMainContent () {
        this.mainContentContainer.classList.add('main-content-container');
        this.addTodoButton.classList.add('add-todo-button');

        this.addTodoButton.textContent = 'New Todo +'

        this.mainContentContainer.append(this.addTodoButton);
        this.content.append(this.mainContentContainer);
    }
}