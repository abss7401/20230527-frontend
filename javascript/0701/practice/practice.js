const todoInput = document.getElementById('todo-input');
const btn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

btn.addEventListener('click', function() {
  let newItem = document.createElement('li'); //li 요소 만들기
  newItem.textContent = todoInput.value; // li 요소 내용 = input 내용값
  newItem.classList.add('todo-item'); // css의 todo-item 스타일 적용
  todoList.appendChild(newItem); // li 요소를 ul 요소의 자식으로 연결
  todoInput.value = ''; // input 내용값 비우기
})


document.addEventListener('DOMContentLoaded', () => {
  const textarea = document.querySelector('textarea');
  const h1 = document.querySelector('h1');

  textarea.addEventListener('keyup', (event) => {
    const length = textarea.value.length;
    h1.textContent = `글자 수: ${length}`
  })
})