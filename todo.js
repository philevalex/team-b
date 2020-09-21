let id = 0;

function getId() {
    id++;
    return id;
}

function addTodo(todos, text) {
    const todo = {
        text,
        checked: false,
        id: getId(),
    };
    return [...todos, todo];
}

function deleteTodo(todos, todoId) {
    return todos.filter(({ id }) => id !== todoId);
}

function changeStatus(todos, todoId, checked) {
    return todos.map((todo) =>
        todo.id === todoId ? { ...todo, checked } : todo
    );
}

function changeTodoText(todos, todoId, text) {
    return todos.map((todo) => (todo.id === todoId ? { ...todo, text } : todo));
}
