import { getFilters } from "./filters"
import {getTodos,removeTodo,toggleTodo,saveTodos}     from "./todos"
// renderTodos
const renderDisplay=()=>{
    let todos=getTodos();
    let filtero=getFilters();
    let filterList= todos.filter((text)=>{return text.title.toLowerCase().includes(filtero.searchText.toLowerCase())});
         filterList=filterList.filter((item)=>{ return !filtero.hideCompleted||!item.completed});
 
    const doneCount=filterList.filter((element)=>{return !element.completed});
    document.querySelector("#display").innerHTML=" ";
    
    document.querySelector("#display").appendChild(checkCount(doneCount));
       
     if(filterList.length>0){
    filterList.forEach((text)=>{
      let dispText= createDom(text);
      document.querySelector("#display").appendChild(dispText);
   } )  }
   else{
      const emptyText=document.createElement("p");
      emptyText.textContent="No todos to show";
      document.querySelector("#display").appendChild(emptyText);

   }
}
// Arguments: none
// Return value: none

// generateTodoDOM
const createDom=(txt)=>{
   let todos= getTodos();
    let container= document.createElement("div");
    const containerEl= document.createElement("label");
    let button= document.createElement("button");
    button.textContent="remove";
    button.classList.add("button","button--text");
    button.addEventListener('click',function(){
           removeTodo(txt.id);
           renderDisplay();
    })
    let checkboxx= document.createElement("input");
    checkboxx.setAttribute("type","checkbox");
    
     checkboxx.addEventListener('change',function(){
        toggleTodo(txt.id);
            
     })
     containerEl.appendChild(checkboxx);
     container.classList.add("list-item");
     containerEl.classList.add("list-item__container");
     container.appendChild(containerEl);
    let texts= document.createElement("span");
    if(txt.title.length>0)
     {texts.textContent=txt.title;}
     else
      { texts.textContent="no title";}
      containerEl.appendChild(texts);
      container.appendChild(button);
      
   return container;
  
}
// Arguments: todo
// Return value: the todo element

// generateSummaryDOM
// Arguments: incompletedTodos
// Return value: the summary element
const checkCount=(doneCount)=>{
    const leftCount= document.createElement("h2");
    leftCount.classList.add('list-title');
    if(doneCount.length>1){
    leftCount.textContent = `No of todos left: ${doneCount.length}`;}
    else{
       leftCount.textContent=`No of todo left: ${doneCount.length}`;}
    
       return leftCount;
    }
// Make sure to set up the exports
export {renderDisplay,checkCount,createDom};