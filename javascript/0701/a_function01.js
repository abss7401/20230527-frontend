// 함수

// 스코프
// 전역 스코프: 코드의 어느 곳에서든 접근할 수 있는 가장 바깥쪽 스코프
// 지역스코프: 함수 내부에서 선언된 변수와 함수가 유요한 범위


// 함수 사용 용도와 예제
// 1. 코드 재사용

function multiply (a, b) {
  return a * b;
}

console.log(multiply(2, 3)); // 6
console.log(multiply(4, 5)); // 20


// 2. 모듈화 및 추상화

function calculateDistance(x1, y1, x2, y2) {
  let dx = x2 - x1;
  let dy = y2 - y1;

  return Math.sqrt(dx * dx + dy * dy);
}

console.log(calculateDistance(1, 2, 3, 4));


// 3. 이벤트 처리

document.querySelector('button').addEventListener('click', function() {
  console.log('button was clicked!');
});


// 자바스크립트에서의 함수 정의 방법 (함수 생성)

// 1. 함수 선언
// 'function' 키워드를 사용항여 함수를 선언

function greet() {
  console.log('Hello world');
};


// 2. 함수 표현식
// 함수를 변수에 할당하는 방식: 변수에 할당된 함수는 변수의 스코프 안에서만 사용가능

let greet2 = function() {
  console.log('Hello world');
};


// 3. 화살표 함수
// ES6에서 새롭게 정의된 함수 선언 방식
// 기존의 function 키워드를 대체하여 간결한 함수표현식 구현

const greet3 = () => {
  console.log('Hello world');
};


//함수 호출
// 함수이름();

greet();
greet2();


// 함수 호출시 인수와 매개변수 (파라미터 & 아규먼트)

// 함수를 호출할 때는 ()괄호 안에 인수(arguments)를 넣어 줄 수 있다.
// 이 인수는 함수 내부로 전달, 함수 내부에서는 매개변수(parameters)라는 이름으로 사용

// argument: 함수를 호출할 때 전달하는 실제 값, 함수 호출 시 괄호 안에 넣어 함수에 전달
//parameter: 함수의 입력으로 사용되는 변수를 의미, 함수를 정의할 때 괄호 안에 선언


// 예제 +


// 반환 값(return)
// 입력 받아 처리한 결과를 '반환'
// return 키워드를 사용해서 지정 가능
// 함수 내에서 return 키워드를 사용하는, 함수의 실행을 즉시 중단하고 return뒤에 오는 값을 반환
function subtraction(a, b) {
  return a - b;
};

let result = subtraction(10, 7);  // subtraction 함수의 반환 값이 result 변수에 저장
console.log(result);

// return 키워드가 없는 함수는 undefined를 반환
function noReturn() {
  console.log('This function does not return anything');
}

let result2 = noReturn();




// 예제 +
function square(x) {
  return x * x;
};

let squareResult = square(5);
console.log(squareResult);


// 익명 함수 & 화살표 함수

// 익명함수: 함수 표현식 or 콜백 함수로 주로 사용
let myFunction = function() {
  console.log('This is an anonymous function');
};

// 화살표 함수: function 키워드 대신 화살표(=>)를 사용
let myFunction2 = () => {
  console.log('This is an arrow function');
};


// 예제 +