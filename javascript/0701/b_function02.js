// 자바스크립트의 고급 함수

// 콜백 함수: 파라미터로 전달되는 함수
// 이벤트가 발생하거나 특정 조건이 충죽되었을 때 호출
// 비동기 작업을 처리하거나 코드의 실행 순서를 제어하는데 유용


// 콜백 함수의 용도
// 1. 이벤트 핸들러
// 웹에서 버튼 클릭, 키 입력, 마우스 이동 등의 이벤트가 발생했을 때 처리를 위해 사용

// 2. 타이머
// setTimeout, setInterval과 같은 함수에서 콜백 함수를 사용하여 특정 시간이 지나면 실행될 코드를 지정

// 3. 배열 매서드
// forEach, map, filter, reduce 등의 배열 매서드는 각 배열 요소에 대해 수행할 작업을 정의하는 콜백 함수를 인수로 받는다.

// 4. 비동기 작업
// fetch로 HTTP 요청을 보내거나, 파일 I/O를 처리하는 등의 비동기 작업에서 사용


// 예제 +


// 클로저: 함수가 다른 함수 내부에서 선언되고, 외부 함수의 변수에 접근하는 것

function makeGreeting(language) {
  return function(name) {
    if(language === 'en')
    console.log('Hello, ' + name + '!');
    else if(language === 'ko') {
      console.log('안녕하세요, ' + name + '!');
    }
  }
}

let greetingEnglish = makeGreeting('en');
let greetingKorean = makeGreeting('ko');

greetingEnglish('hwany');
greetingKorean('승환');


// 재귀함수: 자신을 다시 호출하는 함수

function factorial(n) {
  if(n === 0) {
    return 1;
  }
  else {
    return n * factorial(n - 1); // 함수가 자기 자신을 다시 호출하는 부분
  }
}

console.log(factorial(5));