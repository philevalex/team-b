"use strict";
const todoItems = [];

const id = 0;

function getId() {
  id++;
  return id;
}
function addTodo(newTodo) {
  const todo = {
    text,
    checked: false,
    id: Date.now(),
  };
  todoItems.push(todo);
  console.log(todoItems);
}
function deleteTodo(key) {
  const index = todoItems.findIndex((item) => item.id === Number(key));
  const todo = {
    deleted: true,
    ...todoItems[index],
  };
  todoItems = todoItems.filter((item) => item.id !== Number(key));
  renderTodo(todo);
}
function changeStatus(itemid, checked) {
  todo[itemid].status = checked;
  const index = todoItems.findIndex((item) => item.id === Number(key));
 if (index === -1) {
  throw new Error("Id not found");
todos[index].status = isComplete;
};

function changeTodoTitle(itemid, text) {
    todo[itemid].status = checked;
    const index = todoItems.findIndex((item) => item.id === Number(key));
    if (index === -1) {
        throw new Error('Id not found');
    }
    todos[index].text = text;
};
}
