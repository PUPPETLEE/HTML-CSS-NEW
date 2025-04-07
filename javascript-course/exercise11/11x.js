//save the value array
/*
  This script manages and renders a to-do list on a webpage.

  Variables:
  - todoList: An array containing the list of to-do items.

  Functions:
  - renderTodolist: This function generates the HTML for the to-do list and updates the webpage.
    - It initializes an empty string `todolistHTML`.
    - It iterates over each item in the `todoList` array.
    - For each item, it creates a paragraph element containing the to-do item.
    - It appends each paragraph element to the `todolistHTML` string.
    - Finally, it updates the inner HTML of the element with the class `js-todo-list` to display the to-do list.
*/
                  //for testing purposes
const todoList = JSON.parse(localStorage.getItem('todo')) || [{
  name: 'wtf',
  dueDate: "2020-01-22"
},
{
  name: "Learn HTML",
  dueDate: "2020-01-22"
}];





renderTodolist();

function renderTodolist(){
  todolistHTML=``;

  for(i=0; i<todoList.length; i++){
    const todoObject = todoList[i]; 
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;

    const html = `
   
      <div>  ${name}</div>
    
      <div> ${dueDate} </div>

     

      <button class="delete-button" onclick="todoList.splice(${i}, 1);
      renderTodolist();">
        Delete
      </button>

   
    `;
    todolistHTML +=html;

  }


  document.querySelector('.js-todo-list').innerHTML = todolistHTML;

}



  function addTodo(){

      // save the value in a variable
      const inputElement =  document.querySelector('.js-input');
      const dueDateElement = document.querySelector('.js-due-date');

      if(inputElement.value === '' || dueDateElement.value === ''){
        resetValue();
        return console.log('Please enter a value');
      }


       //push the value in the array
      todoList.push({
        name: inputElement.value,
        dueDate: dueDateElement.value
      });

      localStorage.setItem('todo',JSON.stringify(todoList));



      

      console.log(todoList);

      resetValue();


      renderTodolist();
      }

      //jey created this 
      function resetValue(){

      const inputElement =  document.querySelector('.js-input');
      const dueDateElement = document.querySelector('.js-due-date');



        inputElement.value = '';
        dueDateElement.value = '';


      };

       /*  old todo function only receive name 
function addTodo(){

  // save the value in a variable
 const inputElement =  document.querySelector('.js-input');

 const name = inputElement.value;

  //push the value in the array
  todoList.push(name);

  console.log(todoList);

  inputElement.value = '';
 

  renderTodolist();
}
  */
          
