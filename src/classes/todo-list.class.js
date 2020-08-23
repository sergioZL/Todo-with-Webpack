import { Todo } from "./index";

export class TodoList {

    constructor() {
        //this.todos = [];
        this.cargarLocalStorage();
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminatTodo(id) {

        this.todos = this.todos.filter(todo => todo.id != id);
        this.guardarLocalStorage();

    }

    marcarCompletado(id) {

        for (const todo of this.todos) {

            if (todo.id == id) {

                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }

        }

    }

    eliminarCompletados() {

        this.todos = this.todos.filter(todo => !todo.completado);
        this.guardarLocalStorage();

    }

    guardarLocalStorage() {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    cargarLocalStorage() {

        this.todos = (localStorage.getItem('todos')) ?
            JSON.parse(localStorage.getItem('todos')) : [];

        this.todos = this.todos.map(Todo.fromJSON); //  this.todos.map(obj => Todo.fromJSON(obj));
        console.log(this.todos);
    }
}