// 윤년인지 확인하는 함수

function isLeapYear(year) {
  return (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)
}

console.log(`2020년은 윤년일까? === ${isLeapYear(2020)}`);
console.log(`2020년은 윤년일까? === ${isLeapYear(2010)}`);


// A부터 B까지 더하는 함수

function sumAll(a, b) {
  let output = 0;
  for(let i = a; i <= b; i++) {
    output += i;
  }
  return output;
}

console.log(`1부터 100까지의 합: ${sumAll(1, 100)}`);
console.log(`1부터 10까지의 합: ${sumAll(1, 10)}`);


// 최솟값 구하는 함수

function min(array) {
  let output = array[0]; [2, 0, 1, 5, 7]
  for(const item of array) {
    if(output > item) {
      output = item
    }
  }
  return output;
}

const testArray = [52, 114, 46, 24325, 6456, 34, 3];
console.log(`${testArray} 중에서`);
console.log(`최솟값 = ${testArray} 중에서`);