const inputField = document.getElementById('input-field');
const addTodoBtn = document.querySelector('.add-todo');
const todoContainer = document.querySelector('.todo-container');

addTodoBtn.addEventListener('click', function() {
    var paragraph = document.createElement('p');

    paragraph.classList.add('paragraph');
    paragraph.innerText = inputField.value;

    todoContainer.appendChild(paragraph);

    inputField.value = ''

})
paragraph.addEventListener('click', function() {
    paragraph.parentNode.removeChild(paragraph)
})