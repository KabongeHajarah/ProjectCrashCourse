const todoList=['make dinner','supper'];
renderTodoList()
function renderTodoList() {
    

    let todoListHtml='';
    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];
        const html=`<p>${todo}</p>`;

        todoListHtml+=html;
        
    }

    console.log(todoListHtml);

    document.querySelector('.js-todo-list')
    .innerHTML=todoListHtml;
}

function addTodo(){
   let inputElement= document.querySelector('.js-name-input')
   let name=inputElement.value
   console.log(name);

   todoList.push(name);
   console.log(todoList);

   inputElement.value='';

   renderTodoList();
}