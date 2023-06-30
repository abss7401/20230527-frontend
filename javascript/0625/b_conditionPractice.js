// *if문
// 입력 값 검증

// age변수에 사용자로부터 입렵받은 나이를 할당
// 나이가 0미만, 200 초과일 경우 "Invalid age" 알림창 출력

let age = prompt(`나이를 입력하세요.`);

if(age < 0 || age > 200){
  alert(`Invalid age`);
}

// 2. 특정 조건에 따른 경고 메세지 출력

let temperature = 37.5;

if(temperature > 37.2){
  console.log("You may have a fever");
}


// *else문
// 1. 사용자의 입력 값 검증

// 사용자의 나이를 입력받아 age2 변수에 할당
// 나이가 18세 이상일 경우 알림창에 "You are audult."
// 아닐 경우 "You are a minor."

let age2 = prompt(`나이를 입력하세요.`);

if(age2 >= 18){
  alert(`You are audult.`);
} else{
  alert(`You are a minor.`);
}

// 2. 로그인 상태에 따른 메세지 출력

let isLogin = false;

if(isLogin){
  console.log(`Please log in`);
} else{
  console.log(`Welcome back!`);
}


// *else if문
// else if문을 사용하여 여러 조건에 따라 다양한 동작을 수행

let weather = "snowing";

if (weather === "raining") {
  console.log("Take an umbrella.");
} else if (weather === "sunny") {
  console.log("Wear sunglasses.");
} else if (weather === "snowing") {
  console.log("Wear a coat.");
} else {
  console.log("Check the weather forecast.");
}

// 점수에 따른 등급 부여

// 학생의 점수를 입력받아 score 변수에 할당
// 100점 초과 0 미만일 경우 Invalid Score 출력
// 90점 이상 "Grade A" 출력
// 80점 이상 "Grade B" 출력
// 70점 이상 "Grade C" 출력
// 60점 이상 "Grade D" 출력
// 그 외에는 "Grade F" 출력

let score = prompt(`점수를 입력하세요.`);

if(score > 100 || score < 0){
  console.log(`Invalid Score`);
} else if(score >= 90){
  console.log(`Grade A`);
} else if(score >= 80){
  console.log(`Grade B`);
} else if(score >= 70){
  console.log(`Grade C`);
} else if(score >= 60){
  console.log(`Grade D`);
} else {
  console.log(`Grade F`);
}


// *switch문
// 사용자의 직업을 입력받아 job 변수에 할당
// job(doctor, teacher, engineer) 각 case와 동일 할 경우
// doctor 입력 시 alert("You heal people.");
// teacher 입력 시 alert("You teach students.");
// engineer 입력 시 alert("You design and build things.");

let job = prompt(`직업을 입력하세요.`);

switch(job){
  case "doctor":
    alert("You heel people");
    break;
  case "teacher":
    alert("You teach students");
    break;
  case "engineer":
    alert("You design and build things");
    break;
  default:
    alert("I don't know about that job");
}

// 현재 요일에 따라 다른 활동을 추천하는 예제

let day = new Date().getDay();
// 주어진 날짜의 요일을 반환합니다. 
// 0은 일요일 1~5는 월~금, 6은 토요일

switch (day) {
  case 0:
    console.log("It's Sunday. Take a rest.");
    break;
  case 1:
    console.log("It's a weekday. Let's work hard!");
    break;
  case 2:
    console.log("It's a weekday. Let's work hard!");
    break;
  case 3:
    console.log("It's a weekday. Let's work hard!");
    break;
  case 4:
    console.log("It's a weekday. Let's work hard!");
    break;
  case 5:
    console.log("It's a weekday. Let's work hard!");
    break;
  case 6:
    console.log("It's Saturday. Enjoy your weekend!");
    break;
  default:
    console.log("Invalid day");
}


// *조건 연산자
// 조건에 따른 변수 값 할당

// 변수 isRainingCondition에 true값을 할당
// 해당 값이 참일 경우 "Stay home and read a book" 문자열 값을 activity 변수에 할당
// 해당 값이 거짓일 경우 "Go for a walk" 문자열 값을 activity 변수에 할당
// activity 변수를 console 창에 출력

let isRainingCondition = true;
let activity = isRainingCondition ? "Stay home and read a book" : "Go for a walk";

console.log(activity);