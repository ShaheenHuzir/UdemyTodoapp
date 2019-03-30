import uuidv4 from 'uuid/v4'
import {renderDisplay} from './views.js'
// Setup the empty todos array
let todos=[];

// loadTodos
let loadTodos=()=>{ const todosJSON=localStorage.getItem('todos');
try{
 return ((todosJSON)?  JSON.parse(todosJSON) :  []);
}
catch(e){
         return [];
}

}
// Arguments: none
// Return value: none
todos= loadTodos();
// saveTodos
const saveTodos=(todos)=>{
    localStorage.setItem('todos',JSON.stringify(todos)); }

// Arguments: none
// Return value: none

// getTodos
let getTodos=()=>todos;

// Arguments: none
// Return value: todos array

// createTodo
let createTodo=(title)=>{
   const id=uuidv4();
   
   if(title.length>0){ 
     todos.push({ id,
                 title,
                 completed: false });
                 
   saveTodos(todos);             
               
    } 
    return todos.id;

               }

// Arguments: todo text
// Return value: none

// removeTodo
const removeTodo=(id)=>{
    const noteId= todos.findIndex((item)=>{
       return item.id===id})
       if(noteId>-1){
           todos.splice(noteId,1);
       }
    saveTodos(todos);
 };

// Arguments: id of todo to remove
// Return value: none

// toggleTodo
const toggleTodo=(id)=>{
   const todo= todos.find((item)=>{return item.id===id})
   if(todo){
      todo.completed=!todo.completed;
      saveTodos(todos);
   } 
}

// Arguments: id of todo to toggle
// Return value: none

// Make sure to call loadTodos and setup the exports
export {getTodos,toggleTodo,removeTodo,createTodo,saveTodos}