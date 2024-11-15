const todoList=[];

function addToDo()
{
  let inputText=document.querySelector('.js-name-input')
  todoList.push(inputText.value)
  console.log(todoList)
  inputText.value=''
}