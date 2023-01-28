export default class ToDo {
    constructor (title, description, dueDate, time, complete) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.time = time;
        this.complete = complete;
        this.todosList =  [];
    }
}