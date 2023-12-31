// DOM(Document Object Model)

// 웹 페이지를 프로그래밍 방식으로 조작하고 관리할 수 있는 인터페이스
// HTML 문서의 구조를 트리 구조로 표현, 이를 이용해 js를 사용하여 문서의 내용, 구조, 스타일을 동적으로 변경할 수 있다.

// DOM의 정의
// 노드: 트리의 각 요소(웹 페이지의 각 부분)
// 노드 타입: Document, Element, Text, Comment 등


// DOM 사용

let heading = document.getElementById('myHeading');
heading.textContent = 'Hello, world';

// DOM 요소 선택

// 1. 요소 선택 방법

// getElementById
// 주어진 id 속성을 가진 요쇼를 찾아 반환
// id는 페이지 내에서 유일
let title = document.getElementById('title');

// getElementByClassName
// 주어진 클래스 이름을 가진 모든 요소를 NodeList로 반환
let items = document.getElementsByClassName('item');

// getElementByTagName
// 주어진 태그 이름을 가진 모든 요소를 NodeList로 반환
let tags = document.getElementsByTagName('p');

// querySelector
// 주어진 css선택자와 일치하는 첫 번째 요소를 반환
let firstItem = document.querySelector('.item');

// querySelector All
// 주어진 css선택자와 일치하는 모든 요소를 반환
let allItems = document.querySelectorAll('item');


// 2. NodeList와 HTMLAllCollection

// getElementByClassName / getElementByTagName
// 위의 두가지 방법은 HTMLCollection을 반환
// 실시간으로 원본 문서와 동기화

// querySelectorAll
// NodeList를 반환
// 정적으로 동기화


// 3. 선택된 요소의 조작

let title2 = document.getElementById('title2');

// 속성 변경
title2.style.color = 'blue';

// 텍스트 내용 변경
title2.textContent = '만족도 조사 실시 부탁드립니다.';

// HTML 내용 변경
title2.innerHTML = '<em>만족도 조사 실시 부탁드립니다.</em>';


// DOM 요소 조작

// 1. DOM 요소의 속성 변경
// .style 속성: css 스타일 변경 가능

let title3 = document.getElementById('title3');

// css 스타일 변경
title3.style.color = 'brown';
title3.style.fontSize = '24px';

// 다른 속성 변경
title3.className = 'highlight';


// 2. DOM 요소의 내용 변경
// .textContent, .innerHTML

let paragraph = document.querySelector('p');

// 텍스트 내용 변경
paragraph.textContent = 'Hello';

// HTML 내용 변경
paragraph.innerHTML = '<em>만족도 조사 실시 부탁드립니다</em>';


// 3. DOM 요소 추가 & 삭제
// createElement() / .appendChild(): 새로운 DOM 요소
// .removeChild(): DOM 요소 삭제

let ul = document.querySelector('ul');
let li = document.querySelector('li');

li.textContent = 'New Item';
ul.appendChild(li);

let firstItem2 = document.querySelector('li');
// ul.removeChild(firstItem2);

// 4. DOM 요소 이벤트

let button = document.querySelector('button');
button.addEventListener('click', function() {
  alert('Button Clicked!');
});


// 5. DOM 요소 생성하기
// document.createElement(): 새로운 요소를 생성, 그 요소를 반환

let newDiv = document.createElement('div');

// DOM 요소에 내용 추가
// textContent, innerHTML

newDiv.textContent = 'Hello JS';

// DOM 요소 페이지에 추가
// appendChild()

let body = document.querySelector('body');
body.appendChild(newDiv);

// 특정 위치에 DOM 요소 추가
// insertBefore(추가할 요소, 요소를 삽입할 위치 바로 앞에 있는 요소)

let firstChild = body.firstChild;
body.insertBefore(newDiv, firstChild);

//? DOM 요소 삭제
// removeChild(삭제할 자식 요소);

// body.removeChild(newDiv);

// 문서 속성 조작

// 문서객체.setAttribute(속성이름, 값)
// 특정 속성에 값을 지정

// 문서객체.getAttribute(속성이름)
// 특정 속성을 추출s

document.addEventListener('DOMContentLoaded', () => {
  // 특정 클래스로 요소를 선택
  const rects = document.querySelectorAll('.rect')

  rects.forEach(rect, index) => {
    // index값은 [0, 1, 2, 3]이 반복
    // 1을 더해서 1, 2, 3, 4가 되도록 지정 후 100을 곱해서 너비값을 지정
    const width = (index + 1) * 100 // 100, 200, 300, 400
    // const src = `url/너비/높이`
    const src = `http://placekitten.com/${width}/250`
    // rect.setAttribute('src', src) // src 속성에 값을 지정

    // HTML 표준에 정의된 속성은 간단한 사용방법을 제공
    // 메소드를 사용하지 않고 온점을 찍고 속성을 바로 읽는 것이 가능
    rect.src = src
  }
})


// 스타일 조작
// 문서 객체의 스타일을 조작할 때는 style 속성을 사용

// CSS != 자바스크립트의 속성이름 설정방식

// background-color: backgroundColor
// text-align: textAlign
// font-size: fontSize


// style객체 조정방식
h1.style.backgroundColor // 제일많이사용
h1.style['backgroundColor']