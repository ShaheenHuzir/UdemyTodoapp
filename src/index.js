import { getTodos, createTodo, toggleTodo } from "./todos";
import { setFilters } from "./filters";
import {renderDisplay} from "./views";
// Set up index.html to load the bundle
// Make sure to load uuid via an npm module when necessary

// --

// Add necessary imports
let todos= getTodos();
console.log(todos);
// Render initial todos
renderDisplay();

// Set up search text handler
document.querySelector("#todo-search").addEventListener('input',(e)=>{
   setFilters({searchText:e.target.value})
   renderDisplay();

})
// Set up checkbox handler
document.querySelector("#checker").addEventListener('change',(e)=>
{  
   setFilters({hideCompleted:e.target.checked})

     renderDisplay(); 
     
    }

);
// Set up form submission handler
document.querySelector("#addtodo").addEventListener('submit',(e)=>{
   const title=e.target.elements.todoo.value.trim();
   if(title.length>0){
   createTodo(title);}
   e.target.elements.todoo.value="";   
}     
               );


// Bonus: Add a watcher for local storage
window.addEventListener('storage',(e)=>{
   if(e.key==='todos'){
      
      renderDisplay();
   }
})