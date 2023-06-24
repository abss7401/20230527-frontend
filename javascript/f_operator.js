// 연산자(operator)

// 1. 산술연산자

// 덧셈(+), 뺄셈(-), 곱셈(*), 나눗셈(/), 나머지(%), 증가(++), 감소(--) 등

let x = 10;
let y = 3;

console.log(x + y); // 13
console.log(x - y); // 7
console.log(x * y); // 30
console.log(x / y); // 3.333...

console.log(x % y); // 1

console.log(x++); // x를 출력 후에 1을 더함
console.log(++x); // x에 1을 더한 후에 출력

console.log(--x); // x를 출력 후에 1을 뺌
console.log(--x); // x에 1을 뺀 후에 출력

// 2. 할당연산자

// 할당 연산자는 변수에 값을 할당하는데 사용됩니다.

// 할당(=)
// 더하기 후 할당(+=)
// 빼기 후 할당(-=)
// 곱하기 후 할당(*=)
// 나누기 후 할당(/=)
// 나머지 후 할당(%=)

let a = 10; // 10을 a에 할당

a += 5; // a = a + 5와 같다.
console.log(a); // 15

a -= 2; // a = a - 2와 같다.
console.log(a); // 13

// 3. 비교연산자

// 두 값을 비교하고, 그 결과를 불리언 값으로 변환
// 동등(==), 부등(!=), 일치(===), 불일치(!==)
// 크다(>), 작다(<), 크거나 같다(>=), 작거나 같다(<=)

let b = 10; //숫자열
let c = '10'; //문자열

console.log(b == c) // true(타입을 고려하지 않은 동등 비교)
console.log(b != c) // false(타입을 고려하지 않은 부등 비교)
console.log(b === c) // false(타입을 고려한 일치 비교)
console.log(b !== c) // true(타입을 고려한 불일치 비교)

// 4. 논리연산자

// 논리연산자는 불리언 값을 연산하는데 사용
// AND(&&), OR(||), NOT(!)

let bool1 = true;
let bool2 = false;

console.log(bool1 && bool2); // false
console.log(bool1 || bool2); // true
console.log(!bool1); // false
console.log(!bool2); // true