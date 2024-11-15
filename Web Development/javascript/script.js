const todoList = JSON.parse(localStorage.getItem('todos')) || [];

function displayText() {
    let content = '';
    for (let i = 0; i < todoList.length; i++) {
      content += `<p>${todoList[i]}</p>`; 
    }
    document.querySelector('.js-text').innerHTML = `${content}`; 
  }

function addToDo() {
    let inputText = document.querySelector('.js-name-input');
    todoList.push(inputText.value)
    localStorage.setItem('todos' , JSON.stringify(todoList));
    inputText.value = '';
    displayText(); 
  }

function deleteAll() {
  localStorage.removeItem('todos');
  todoList.length = 0;
  displayText();
}

displayText();
