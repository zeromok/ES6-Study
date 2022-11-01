
/*
    ES5 와 ES6는 많은 차이가 있다.
    차이점을 이해해 보자
    왜? 렉시코드의를 최신 문법으로의 리팩토링, 유지보수 등
    ES6 이후의 JS를 모던자바스크립트라고 부르고 있다.
*/


// ==========================
// let & const
// ==========================
(function () {
    variable = 'no var';
    console.log(variable);  // no var
})();
    console.log(variable);  // no var
// 만약 선언문이 있음 재할당 이지만, 없는경우 var로 인식해 전역변수로 인식 -> 함수레벨스코프


(function () {
    console.log(variable);
    var variable = 'hoisted';   // undefinde : 변수 선언부분만 먼저 동작 값 할당 X
})();

// let & const
/*
    - 블록레벨스코프
    - 중복선언 불가능
    - 호이스팅이 발생하지 않는 것처럼 동작
        런타임 이전 JS엔진에 의해 암묵적으로 선언단계가 먼저 실행되지만, 초기화 단계는 변수 선언문에 도달했을 때 실행
    - let : 재할당 가능, const : 변경 불가능
    *** const를 주로 사용해 변수의 안정성을 높이자
*/


// ==========================
// Arrow function (화살표 함수)
// ==========================
// ES5
    function sum1(a, b){
        return a+b;
    }

// ES6
    const sum2 = (a, b) => {
        return a+b;
    }
// 매개변수가 하나일 때 () 생략 가능
// {}, return 생략 가능

// 단, 화살표 함수는 기존의 함수와 this 바인딩이 다르다 ***
// 화살표 함수는 lexical this 를 따른다.
/*
    Lexical Scope 란?
    즉, 함수를 어디서 선언하였는지에 따라 상위 스코프를 결정
    this 스코프 고정?
*/
const person1 = {
    weight: 100,
    getWeight: () => { this.weight },
};
console.log(person1.getWeight());    // undefined

const person2 = {
    weight: 100,
    getWeight: function() { return this.weight }
};
console.log(person2.getWeight());   // 100

function person3() {
    this.weight = 100;
    this.getWeight = () => { return this.weight; }
}
//console.log(person3.getWeight());   // Error
const test = new person3();
console.log(test.getWeight());  // 100


// ==========================
// Default Parameter
// ==========================


// ==========================
// Template Literal
// ==========================


// ==========================
// Multi-line String
// ==========================


// ==========================
// Class
// ==========================


// ==========================
// Module
// ==========================


// ==========================
// destructuring
// ==========================


// ==========================
// Promise
// ==========================


// ==========================
// String Method
// ==========================