// 구구단 만들기

// 1 ~ 9단
// 중첩된 for문 사용

// for(초기화; 조건; 증감) {
//   for(초기화; 조건; 증감) {

//   }
// }

// 첫 번째 루트: 구구단이 몇 단인지 반복
// 두 번째 루트: 각 구구단이 실제 연산되는 반복
// 브라우저 출력

let index;
let index2;

for(index = 1; index < 10; index++) {
  document.write(`${index}단<br>`)
  for(index2 = 1; index2 < 10; index2++) {
    document.write(`${index} x ${index2} = ${index * index2}<br>`)
  }
}