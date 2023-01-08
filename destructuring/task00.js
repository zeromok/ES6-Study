
/* 
    구조 분해 할당을 사용해 아래 미션을 수행해 보세요. 
*/
let user = {
    name: "John",
    years: 30
    };

// name 프로퍼티의 값을 변수 name에 할당하세요.
// const {name, years} = user;
// console.log(`nama: ${name}`);

// years 프로퍼티의 값을 변수 age에 할당하세요.
// const {name, years: age } = user;
// console.log(`age : ${age}`);

// isAdmin 프로퍼티의 값을 변수 isAdmin에 할당하세요. isAdmin이라는 프로퍼티가 없으면 false를 할당하세요.
// console.log(user.isAdmin ? isAdmin : false);
// const {name, years, isAdmin = false} = user;

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
// 가장 많은 급여를 받는 사람의 이름을 반환해주는 함수 topSalary(salaries)를 만들어봅시다. 조건은 아래와 같습니다.

// salaries가 비어있으면 함수는 null을 반환해야 합니다.
// 최대 급여를 받는 사람이 여러 명이라면 그 중 아무나 한 명 반환하면 됩니다.
// 힌트: Object.entries와 구조 분해를 사용해 키-값 쌍을 순회하는 방식을 사용해보세요.

function topSalary(salaries) {
    // if(salaries === null) return null;
    
    let max = 0;
    let maxName = null;
    for( const[name, salary] of Object.entries(salaries)) {
        if(max < salary) {
            max = salary;
            maxName = name;
        }
    }
    return maxName;
    
}
console.log(topSalary(salaries));