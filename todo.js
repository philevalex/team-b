const render = ({ todos, editTodoId }) => `
<div class="container">
<div class="top-bar">

    <div class="todo-menu">TODO LIST
    <form onsubmit="onAddNewTodo(this, event)"> 
    <div class="todo-input">
            <input class="todo-task" name ="text" type ="text" placeholder="Enter item" />
            <button class="add" type ="submit">add</button>
        </div>
        </form>
    </div>
  
</div>
<div class="main-window">
    <div class="left-column"></div>
   
    <div class="todo-list-window">
    
        <ul class="list-todo" type="none">
        ${todos.map((todo) =>
          todo.id === editTodoId
            ? `
        <li class="list_item__todo">
        <input type="text" value="${todo.text}"/>
        <button> Save </button>
            <button class="delete-task-button" name="delete-1" type="reset">X</button>
            <button class="edit-task-button" name="delete-1" type="edit">edit</button>
        </li>
         `
            : `
            <li class="list_item__todo">
            ${todo.checked ? `<input type="checkbox" checked=" "> `: ` `}
            <span class="todo-text"> ${todo.text} </span>                    
            <button class="delete-task-button" name="delete-2" type="reset">X</button>
            <button class="edit-task-button" name="delete-1" type="edit">edit</button>
        </li>
         `
         ).join('')}   
           
            <li class="list_item__todo">
                <input type="checkbox">
                <span class="todo-text"> Milk </span>
                <button class="delete-task-button" name="delete-3" type="reset">X</button>
                <button class="edit-task-button" name="delete-1" type="edit">edit</button>
            </li>
        </ul>
    </div>
    <div class="right-column"></div>
</div>
</div>
`;

let state = {
  todos: [
      { id: 1, text: "My text", checked: false },
      { id: 2, text: "foor", checked: true },
      { id: 3, text: "bara", checked: false }
    ],
  editTodoId: null,
};
const renderToDom = (template) => {
  document.getElementById('app').innerHTML = template;
};

let setState = (newStatePart) => {
  state = {...state, ...newStatePart};
  const newHtml = render (state);
  renderToDom(newHtml);
};

const getFormData = (formElement) => {
    const formData = new FormData(formElement);
    const data = {};
    for (const [key, value] of formData.entries()) {
        data[key] = value;
    }
    return data;
};
const onAddNewTodo = (formElement, event) => {
  event.preventDefault();
  const formData = getFormData(formElement);
  const newTodo = {
    text: formData.text,
    checked: formData.checked === 'on',
  };
  setState({
    todos: addTodo(state.todos, newTodo)
  });
};

const main = () => {
    document.getElementById('app').innerHTML = render(state);
};

main();

let id = 0;

function getId() {
  id++;
  return id;
}

function addTodo(todos, {text, checked=false}) {
  const todo = {
    text,
    checked,
    id: getId(),
  };
  return [...todos, todo];
}

function deleteTodo(todos, todoId) {
  return todos.filter((id) => id !== todoId);
}

function changeStatus(todos, todoId, checked) {
  return todos.map((todo) =>
    todo.id === todoId ? { ...todo, checked } : todo
  );
}

function changeTodoText(todos, todoId, text) {
  return todos.map((todo) => (todo.id === todoId ? { ...todo, text } : todo));
}
