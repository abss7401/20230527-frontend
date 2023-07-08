// 웹페이지에서 입력된 값이 이메일 형식인지 확인하는 JS코드

// 1. 페이지가 로드되면(DOMcontentLoaded 이벤트 발생 시), 이 코드가 작동

// input, p태그의 요소를 가지고 와서
// const isEmail = (value) => {
//   return (value.indexOf('@') > 1)
//   && (value.split('@')[1].indexOf('.') > 1)
// }

// input 태그에 글자 입력 양식의 keyup이벤트리스너 추가

// isEmail(value)이 true: `이메일 형식입니다. ${value}` 색상은 green
// isEmail(value)이 false: `이메일 형식이 아닙니다. ${value}` 색상은 red


document.addEventListener('DOMContentLoaded', () => {
  const email = document.querySelector('#email');
  const result = document.querySelector('p');

  // 정규 표현식
  const isEmail = (value) => {
    return (value.indexOf('@') > 1)
    && (value.split('@')[1].indexOf('.') > 1)
  }

  email.addEventListener('keyup', (event) => {
    const value = event.currentTarget.value
    if(isEmail(value)) {
      result.style.color = 'green';
      result.textContent = `이메일 형식입니다. ${value}`;
    }
    else{
      result.style.color = 'red';
      result.textContent = `이메일 형식이 아닙니다. ${value}`;
    }
  })

})