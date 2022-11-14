// ==========
// 배열 분해
// ==========

// todo 이름과 성을 요소로 가진 배열
let arr = ["Bora", "Lee"];

// todo 구조분해할당 이용
let [firstName, lastName] = arr;
console.log(firstName); // Bora
console.log(lastName);  // Lee

// todo 응용
// todo split() : 매개변수로 들어온 문자 기준으로 문자열을 나누어 배열로 반환
let [fName, lName] = "Bora Lee".split(" ");
console.log(fName);
console.log(lName);

// todo 할당연산자 우측엔 모든 이터러블이 올 수 있다. -> 반복가능한 객체
let [a, b, c] = "abc";
console.log(a, b, c); // a b c

let [one, two, three] = new Set([1, 2, 3]);
console.log(one, two, three); // 1 2 3

// todo 할당연산자 좌측엔 뭐든지 올 수 있다. -> 할당할 수 있는 모든것
let user00 = {};
[user00.id, user00.pw] = "Bora Lee".split(" ");
console.log(user00); // { id: 'Bora', pw: 'Lee' }

// todo .entries() 사용
let user01 = {
    name: "John",
    age: 30
};

for(let [key, value] of Object.entries(user01)) {
    console.log(key, value); // name John 출력 후 age 30
}

// todo 변수 교환 트릭
let guest = "Jane";
let admin = "Pete";

// 변수의 값을 교환해보자
[guest, admin] = [admin, guest];
console.log("guest :", guest, "admin :", admin); // guest : Pete admin : Jane

// todo ...으로 나머지 요소 가져오기
let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log(name1, name2, rest); // Julius Caesar [ 'Consul', 'of the Roman Republic' ]


// =============
// 객체 분해
// =============
/*
    let {var1, var2} = {var1:..., var2:...};
    객체프로퍼티패턴 = 분해하고자 하는 객체
*/
let options = {
    title: 'Menu',
    width: 100,
    height: 200
};
// 기본적으로 이름 맞추어 주기
let {title, width, height} = options;
console.log(title, width, height); // Menu 100 200

// 다른이름에 넣기
let {title: x, width: y, height: z} = options;
console.log(x, y, z); // Menu 100 200

// 기본값 설정
let {title: t ="a", width: w = 0, height: h = 0, test = "test"} = options;
console.log(t, w, h, test); // Menu 100 200 test


// =============
// example
// =============
let user = {
    name: "John",
    years: 30
};
// 1. name프로퍼티 값을 변수 name에 할당
let name = user.name;
console.log(name);  // John

// 2. years프로퍼티의 값을 변수 age에 할당
let age = user.years;
console.log(age);   // 30

// 3. isAdmin프로퍼티의 값을 변수 isAdmin에 할당
//    만약, 프로퍼티가 없으면 false를 할당
let isAdmin = user.isAdmin ? isAdmin : user.isAdmin = "false";
console.log(isAdmin);

// 종합
// let {name, years: age, isAdmin=false} = user;

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
/*
    1. 가장 많은 급여를 받는 사람의 이름을 반환해주는 함수 topSalary(salaries)를 만들어 보자
    조건
        : salaries 가 비어있으면 null을 반환
          최대급여를 받는 사람이 여러명이라면 그 중 아무나 반환
*/
function topSalary(salaries){

    let max = 0;
    let maxName = null;

    for(let [key, value] of Object.entries(salaries)){

        if(max < value){
            max = value;
            maxName = key;
        }

    }// for

    return maxName;

}// topSalary()

console.log(topSalary(salaries));
