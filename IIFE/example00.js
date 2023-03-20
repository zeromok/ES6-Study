// * IIFE (Immediately Invoked Function Expression) 즉시실행함수

// 소괄호로 함수를 감싸서 실행하는 문법을 사용
(function (){
    console.log('Hi...!');
})();

// 화살표 함수 응용
(() => {
    console.log('안녕...!');
})();

// ? 즉시 실행함수에 익명함수를 사용해야 할까?
/*
    즉시실행함수에도 이름을 붙여 기명 즉시실행함수로 사용 할 수 있다.
    하지만 즉시실행함수는 선언과 동시에 호출되어 반환되어 재사용 할 수 없기 때문에 이름을 지어주는 것이 의미가 없다.
*/

// ? 왜 사용해?
/*
    1. 필요없는 전역 변수의 생성을 줄일 수 있다.
    2. private 한 변수를 만들 수 있다.
*/

// ? 어떻게 활용해?
// 1. 단 한번의 사용이 필요한 함수 Ex) 변수를 초기화 하는 함수
let isAdult;

(function init(age) {
    let currentAge = age;
    console.log(`currentAge : ${currentAge}`);
    isAdult = age >= 20; // true/false
})(20);

console.log(isAdult); //  true
// console.log(currentAge); //  Uncaught ReferenceError: currentAge is not defined

// 2. 자바스크립트 모듈
// * 모듈 : 여러 기능들에 관한 코드가 모여있는 하나의 파일

const Counter = (function counterIIFE() {
    // 현재 counter 값을 저장하기 위한 변수
    // current 변수는 private 하기 때문에 클로저를 통한 접근 외에는 접근 및 수정이 불가능 하다.
    let current = 0;

    // 즉시실행함수로써 반환되는 객체
    return {
        getCounterValue: function () {
            return current;
        },
        increaseValue: function () {
            current++;
            return current;
        },
        decreaseValue: function () {
            current--;
            return current;
        },
    };
})();
console.log(Counter.getCounterValue()); // 0
console.log(Counter.increaseValue()); // 1
console.log(Counter.decreaseValue()); // 0
