// 자바스크립트의 조건문

// 조건문 : 프로그램에게 특정 조건을 검사하고, 그 결과에 따라 다른 행동을 하도록 명령하는 방식

// 조건문의 종류 : if문, else if문, if-else문, switch문

// 조건에는 보통 비교 연산자(==, !=, ===, <, >, <=, >=)



// 1. if문
// 가장 기본적인 조건문, 특정 조건이 참일 경우 코드 블록이 실행

// if문의 기본형

// if(조건) {
//   조건이 참일 때 실행되는 코드
//   조건이 거짓일 경우 코드 블록 무시
// }

let number = 10;

if(number > 0){
  console.log("The number is positive");
};


// 2. else문
// else문은 if문과 함께 사용, if의 조건이 거짓일 경우 else 뒤의 코드 블록이 실행

// if else문의 기본형

// if(조건){
//   조건이 참일 때 실행되는 코드
// }
// else{
//   조건이 거짓일 때 실행되는 코드
// }

let number2 = -10;

if(number2 > 0){
  console.log("The number is positive");
}
else{
  console.log("The number is not positive")
}


// 3. else-if문
// else if문은 if와 else 사이에 여러 개의 조건을 추가

// if문과 else문 사이에 위치, 여러 개의 조건을 확인할 수 있게 해주는 제어 구조

// else if문의 기본형

// if(조건1){
//   조건1이 참일 때 실행되는 코드
// }
// else if(조건2){
//   조건1이 거짓이고 조건2가 참일 때 실행되는 코드
// }
// else if(조건3){
//   ...
// }
// else{
//   모든 조건이 거짓일 때 실행되는 코드
// }

let number3 = 0;

if(number3 > 0){
  console.log("The number is positive");
} else if(number3 < 0){
  console.log("The number is not positive");
} else{
  console.log("The number us zero");
}

// 4. switch문
// switch문은 여러가지 경우 중 하나를 선택하는데 사용
// 표현식의 값을 확인하고 해당 값과 일치하는 case문의 코드 블록을 실행

//else문, else-if문이 복잡하게 겹처질 때 사용하면 코드를 간결하고 이해하기 쉽게 만듬

// switch문의 기본형

// switch(식){
//   case 값1:
//     식이 값1과 일치할 때 실행하는 코드
//   case 값2:
//     식이 값2과 일치할 때 실행하는 코드
//   case 값3:
//     식이 값3과 일치할 때 실행하는 코드
// }

// default: 식이 어떤 값과도 일치하지 않을 때 실행되는 코드
// break: switch문을 빠져나옴.

let fruit = "apple";

switch(fruit){
  case "banana":
    console.log("I am a banana");
    break;
  case "apple":
    console.log("I am a apple");
    break;
  case "strawberry":
    console.log("I am a strawberry");
    break;
  default:
    console.log("I'm not anything")
}

// 5. 조건 연산자(삼항 연산자)
// 조건 연산자는 자바스크립트에서 세 개의 피연산자(항)을 가지는 유일한 연산자
// if-else문을 더 간결하게 표현

// 조건 연사자의 기본형

// 조건 ? 표현식1 : 표현식2

// 조건을 평가한 후, 그 결과 true이면 표현식1을, false면 표현식2를 실행 => if else문과 동일

// if(조건){
//   표현식1
// } else{
//   표현식2
// }

let numCondition = 15;

let message = numCondition > 10 ? "true" : "false";

console.log(message);

// 논리 연산자로 조건 체크

// 조건을 2개 이상 체크할 경우에는 조건 연산자를 사용해서 조건식을 만듬
// 두 조건이  true일 경우 1개만 true일 경우처럼 여러 경우의 수를 따질 때에는 논리연산자를 사용

// OR 연산자 : 2개의 피연산자중 하나라도 true가 있으면 결과값은 true
// AND연산자 : 2개의 피연산자중 하나라도 false가 있으면 결과값은 false