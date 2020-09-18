"use strict"
const todos = [1,2,3,4];

const id=0;

function getId() {
    id++;
    return id;
}
function addtodo (newTodo){
    todos.push({id: getId(), title: NewTodo, isComplete: false });
}
function deletetodo (todoid)
{
    const index = todos.findIndex((todo) => todo.id === todoId);
    if (index === -1) {
        throw new Error('Id not found');
    }
    todos.splice(index, 1)

}
function statusId()
{
    todos.push(newTodo)

}
function  ()
{
    todos.push(newTodo)

}