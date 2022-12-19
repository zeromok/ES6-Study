
/*
    ES5 와 ES6는 많은 차이가 있다.
    차이점을 이해해 보자
    왜? 레거시코드를 최신 문법으로의 리팩토링, 유지보수 등
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
// ES5
function multiply1(a, b) {
    return a * b;
  }
  
  console.log(multiply1(5, 2)); // 10
  console.log(multiply1(5));    // NaN

// 과거에는 ES6처럼 쓰려면 함수안에 조건식을 사용했다.
function multiply(a, b) {
    b = typeof b !== "undefined" ? b : 1;
    // typeof b !== "undefined" 의 값을 ? b : 1 비교 후 b에 대입
    return a * b;
  }
  
  console.log(multiply(5, 2));   // 10
  console.log(multiply(5));      // 5

// ES6
function multiply2(a, b = 1) {
    return a * b;
  }
  
  console.log(multiply2(5, 2));  // 10
  console.log(multiply2(5));     // 5


// ==========================
// Template Literal
// ==========================
// 백틱의 사용 (``), ${} 으로 JS표현식을 넣을 수 있다.

// ES5
var firstName = 'aaa';
var lastName = 'bbb';
var name = 'My name is ' + firstName + ' ' + lastName + '.';
console.log(name);  // My name is aaa bbb.

// ES6
let name1 = `My name is ${firstName} ${lastName}.`
console.log(name1); // My name is aaa bbb.


// ==========================
// Multi-line String
// ==========================
//ES5
var lorem = 'a \nb \nc'
console.log(lorem); // \n : 줄바꿈, 정규식을 사용해 줄바꿈

//ES6
const lorem1 = `a
b
c`
console.log(lorem1);    // 여러라인의 문자열 표현 가능


// ==========================
// Class
// ==========================
/*
  자바 스크립트는 프로토타입(Prototype)기반 객체지향 언어다.
    - 클래스가 필요없는 객체지향 프로그래밍 언어
*/
// ES5 생성자 함수
var Person0 = (function() {
    function Person0(name) {
        this.name = name;
    }

    // 프로토타입 메소드
    Person0.prototype.sayHi = function() {
        console.log('Hi My name is ' + this.name);
    };

    // 생성자 함수 반환
    return Person0;
}());
var me = new Person0('Lee');
me.sayHi(); // Hi My name is Lee

// ES6
class Person{

    // 생성자
    constructor(name){
        // 인스턴스 생성 & 초기화
        this.name = name;
    }

    // 프로토타입 메소드
    sayHi() {
        console.log(`My name is ${this.name}`);
    }

    // 정적 메소드
    static sayHello(){
        console.log('Hello');
    }
}// end class

// 인스턴스 생성
const me1 = new Person('Lee');

// 프로퍼티 참조
console.log(me1.name);   // Lee

// 메소드 호출
me1.sayHi();        // My name is Lee

// 정적메소드 호출
Person.sayHello();  // Hello


// ==========================
// Module
// ==========================
/*
    - JS 코드를 담고있는 파일
    - export, import 구문을 사용할 수 있다.
    - strict mode(엄격모드)로 동작한다.
    - Module Scope가 존재
*/

// ==========================
// destructuring(구조 분해 할당)
// ==========================
// 객체나 배열을 변수로 분해
let arr = ['a', 'b', 'c']
let [one, two, three] = arr;

console.log(one);   // a
console.log(two);   // b
console.log(three); // c

let [one1, , three1] = arr;
// 두번째 요소는 필요하지 않을때, 할당할 변수가 없어도 생략


// ==========================
// Promise
// ==========================
/*
    비동기처리에 사용되는 객체
*/

function getData() {
    return new Promise(function(resolve, reject) {
        $.get('url 주소/products/1', function(response) {
            if(response) {
                resolve(response);
            }
            reject(new Error('not found'))
        })
    })
}


getData()
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.log(error);
    })


// ==========================
// String Method
// ==========================
/*
    String 객체에 정의된 문자열과 관련된 작업을 할 때 사용하는 메소드들
*/
// String.fromCharCode(); : 쉼표로 구분되는 일련의 유니코드에 해당하는 문자로 구성된 문자열 반환 
String.fromCharCode(65, 66, 67);    // "ABC"

// String.fromCodePoint(); : 쉼표로 구분되는 일련의 코드포인트에 해당하는 문자들로 구성된 문자열 반환
// 사파리, 익스플로어에서 지원되지 않음
String.fromCodePoint(65, 66, 67);   // "ABC"
String.fromCodePoint(194564);   // "￦uD87E￦DC04"

// 위 메소드들 뿐만아니라 여러 기능들이 담긴 메소드들이 많다.
