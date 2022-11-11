/*
    Destructuring(디스트럭처링)
    : 구조화된 배열 또는 객체를 비구조화, 파괴 하여 개별적인 변수에 할당하는 것
      배열 또는 객체 리터럴에서 필요한 값만을 추출하여 변수에 할당하거나 반환할 때 유용하다.
*/

// =====================================
// Array Destructuring(배열 디스트럭처링)
// =====================================

// ES5
var arr00 = [1, 2, 3];

var one00 = arr00[0];     // 1
var two00 = arr00[1];     // 2
var three00 = arr00[2];   // 3


// ES6
const arr01 = [1, 2, 3];

const [one01, two01, three01] = arr01;
console.log(one01);     // 1
console.log(two01);     // 2
console.log(three01);   // 3

// let x, y, z;
// [x, y, z] = [1, 2, 3];
// 위 구문과 같다.
let [x, y, z] = [1, 2, 3];

[x, y] = [1, 2, 3];      // 1 2

[x, , z] = [1, 2, 3];    // 1 3

// 기본값
[x, y, z = 3] = [1, 2];      // 1 2 3

[x, y = 10, z = 3] = [1, 2]; // 1 2 3

// spread 문법
[x, ...y] = [1, 2, 3];   // 1 [ 2, 3 ]

// ==================
// new Date() Example
// ==================
/*
    new Date() :  현재 로케일 또는 지정된 로케일을 사용하여 날짜 및 시간을 문자열로 변환합니다.
*/
let today = new Date();
console.log(today);         // 2022-11-11T04:26:38.221Z

/*
    toISOString() : 날짜를 ISO 형식의 문자열 값으로 반환합니다.
                  : ISO 형식 : 국제 표준 날짜 형식
    substring(start, end)   : String 개체 내에서 지정된 위치에 있는 하위 문자열을 반환합니다.
*/
let formattedDate = today.toISOString().substring(0, 10);
console.log(formattedDate); // 2022-11-11

/*
    split() : 지정한 구분자를 이용해 여러 문자열로 나눈다.
*/
let [year, month, day] = formattedDate.split('-');
console.log([year, month, day]);


// =====================================
// Object Destructuring(객체 디스트럭처링)
// =====================================

// ES5
var obj00 = { firstName00: 'Ungmo', lastName00: 'Lee' };

var firstName00 = obj00.firstName00;  // Ungmo
var lastname00 = obj00.lastName00;    // Lee

// ES6
let obj = { firstName: 'Ungmo', lastName: 'Lee' };

/*
    프로퍼티 키 기준으로 디스트럭처링 할당이 이루어진다. 순서는 의미 없다.
    변수 lastName, firstName 가 선언되고 obj가 디스트럭처링 되어 할당된다.
*/
let {lastName, firstName} = obj;
console.log(lastName);  // Lee
console.log(firstName); // Ungmo

/*
    프로퍼티 키가 prop1인 프로퍼티의 값을 변수 p1에 할당
    프로퍼티 키가 prop2인 프로퍼티의 값을 변수 p2에 할당
    const { prop1: p1, prop2: p2 } = { prop1: 'a', prop2: 'b' };
    console.log(p1, p2); // 'a' 'b'
    console.log({ prop1: p1, prop2: p2 }); // { prop1: 'a', prop2: 'b' }

    아래는 위의 축약형이다
    const { prop1, prop2 } = { prop1: 'a', prop2: 'b' };
    console.log({ prop1, prop2 }); // { prop1: 'a', prop2: 'b' }

    default value
    const { prop1, prop2, prop3 = 'c' } = { prop1: 'a', prop2: 'b' };
    console.log({ prop1, prop2, prop3 }); // { prop1: 'a', prop2: 'b', prop3: 'c' }
*/

// 객체에서 프로퍼티 키 로 필요한 프로퍼티 값만 추출하기
const todos = [
    {
               id: 1,
          content: 'HTML',
        completed: true 
    },
    {
               id: 2,
          content: 'CSS',
        completed: false
    },
    {
               id: 3,
          content: 'JS',
        completed: false
    }
  ];
  
  // todos 배열의 요소인 객체로부터 completed 프로퍼티만을 추출한다.
  const completedTodos = todos.filter(({ completed }) => completed);
  console.log(completedTodos); // [ { id: 1, content: 'HTML', completed: true } ]