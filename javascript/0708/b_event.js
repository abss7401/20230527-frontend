// 이벤트 발생 객체

// document.addEventListener('DOMContentLoaded', () => {
//   const textarea = document.querySelector('textarea');
//   const h1 = document.querySelector('h1');

//   textarea.addEventListener('keyup', function(e) {
//     const length = textarea.value.length;
//     h1.textContent = `글자수 : ${length}`;
//   })
// })


// 이벤트 리스너 내부에서 변수에 접근할 수 없는 경우

const listener = function(e) {
  const length = textarea.value.length;
  h1.textContent = `글자수 : ${length}`;
}


// 이벤트를 발생시킨 객체(현재 코드에서는 textarea)에 접근 할 수 있는 방법

// 1. event.currentTarget 속성
// 해당 속성의 경우 화살표 함수와 function 키워드 함수 모두 사용 가능

// 2. this 키워드
// function 키워드 함수 사용 시에만 사용 가능
// 화살표 함수 사용 X