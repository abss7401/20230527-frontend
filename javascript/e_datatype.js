//자바스크립트의 자료형
// 숫자, 문자열, 논리형
// 객체, 배열
// undefined, null

// 1. 숫자형(Number)

let number = 10;
let float = 10.5;

// 2. 문자열(String)

let string = 'hello';
let string2 = "world";
let string3 = `hello, world`;

// 3. 논리형(Boolean)

let booleanExample = true;
let booleanExample2 = false;

let booleanExample3 = "참";

// 4. undefined, null

let nullExample = null;
// 변수에 값이 없음(데이터가 유효하지 않은 상태)

let undefinedExample;
// 값이 할당되지 않은 변수의 기본값

// 5. 객체(Object)

let obj = {
  name: "hwany",
  age: 28
};

// 6. 자료형 검사(type of)

typeof 변수명

// 7. 자료형 변환

// 문자열로 변환: String(), toString()

// 숫자형으로 변환: Number()

// boolean으로 변환: boolean()
// false, 0, "", null, undefined, NaN을 제외한 모든것이 true