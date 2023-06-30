// 자바스크립트의 반복문

// 반복문(Loops)은 동일한 코드 블록을 여러 번 실행할 수 있도록 해주는 프로그래밍의 기본 구조
// 조건이 만족될 때까지 반복하여 실행할 수 있는 명령의 집합

// 반복문의 종류 : for, while, do-while, for..in, for..of


// 배열의 기본형
// 변수 변수명 = [요소1, 요소2, ...];

let fruits = ['apple', 'banana', 'strawberry'];
// 배열의 각 요소에 접근 : 0부터 시작하는 인덱스(index)를 사용해 접근
console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(fruits[2]); // strawberry
// 인덱스 번호는 '배열의 요소의 수 -1'

// 배열의 길이 확인
// length 속성을 사용하여 배열의 길이 확인
// 배열에 들어있는 항목의 수

console.log(fruits.length); // 3


// 1. for 반복문
// for 반복문은 코드를 정해진 횟수만큼 반복 실행할 때 사용

// for 반복문의 기본형

// for(초기화; 조건; 증감){
//   실행할 코드
// }

// 초기화: 반복문이 시작될 때 단 한번만 실행, 카운터 변수를 초기화하는데 사용
// 조건: 각 반복 사이클의 시작에서 평가되는 표현식, 이 조건이 true라면 코드 블록이 실행되고, false라면 반복문이 종료
// 증감: 각 반복 사이클이 끝날 때 마다 실행, 카운터 변수를 증가 또는 감소시키는데 사용

for (let index = 0; index < 5; index++){
  console.log(index);
}

// 1. let index = 0;
// 2. index < 5;
// 3. index++
// 4. console.log(index);

// 반복문 실행 순서: (1 - 2 - 4 - 3) => (2 - 4 - 3)

// index는 초기화에서 0으로 시작
// 조건에서 i < 5가 참인 동안 반복문이 실행
// 각 반복 사이클이 끝날 때마다 i는 1씩 증가


// 2. while 반복문
// while 반복문은 주어진 조건이 참인 동안 코드 블록 계속! 진행
// 조건이 처음부터 false인 경우 코드 실행 X

// while 반복문 기본형

// while(조건){
//   실행할 코드
// }

let index2 = 0;

while(index2 < 5){
  console.log(index2);
  index2++;
}


// 3. do-while 반복문: while문과 유사, 조건을 확인하기 전에 코드를 먼저 코드 블록을 실행
// 코드 블록이 최소한 한 번은 실행되는 것이 보장

let index3 = 0;

do{
  console.log(index3);
  index3++;
}while(index3 < 5);

// 반복문은 간단한 코드로 많은 작업을 수행할 수 있게 해주는 도구
// 반복문을 사용할 때는 항상 무한루프(조건이 무조건 참)에 빠지지 않도록 주의!

// 1~20까지의 숫자 중에서 3의 배수만 출력

for (let index4 = 1; index4 < 21; index4++) {
  if(index4 % 3 === 0){
    console.log(index4);
  }
}

// for..in 반복문
// 객체의 속성을 반복하거나 배열의 인덱스를 반복하는데 사용
// 배열의 반복하는 경우에는 for..of, forEach()를 사용하는 것이 일반적

// for..in 반복문의 기본형

// for(변수 in 객체){
//   실행할 코드
// }


// for..of 반복문
// for..of 반복문은 iterable(반복가능한) 객체(배열, 문자열, Map, Set 등)의 요소들을 반복하는데 사용

// for..of 반복문의 기본형

// for(변수 of interable){
//   실행할 코드
// }


// forEach() 반복문
//배열의 각 요소에 대해 함수를 실행하는 간단하고 직관적인 방법을 제공
// for, while 반복문을 사용하는 것보다 코드가 간결하고 가독성이 좋다.