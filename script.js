const todoList=[];

function addTodo(){
   let inputElement= document.querySelector('.js-name-input')
   let name=inputElement.value
   console.log(name);

   todoList.push(name);
   console.log(todoList);

   inputElement.value='';
}