/*
    문제 1 : 배열의 삭제

    다음 배열에서 400, 500을 삭제하는 code를 입력하세요.
*/
/*
    접근 방법
    : 내장 함수를 활용하는 방법으로 접근해보자
    pop() : 배열의 마지막 요소를 삭제후 삭제된 요소 반환
    shift() : 배열의 첫번째 요소를 삭제
    splice() : 인덱스를 정해 요소를 삭제
    filter() : 조건에 일치하는 새 배열 생성
    delete() : 배열의 요소 삭제
*/
var nums = [100, 200, 300, 400, 500];

// pop() 사용 -> 원본배열을 건드린다.
nums.pop();
console.log(nums); // [ 100, 200, 300, 400 ]
nums.pop();
console.log(nums); // [ 100, 200, 300 ]

// filter 사용 -> 원본배열을 건드리지 않음
let nums00 = [100, 200, 300, 400, 500];

let newArr = nums00.filter((e) => {
    return e <= 300;
});

console.log(newArr); // [ 100, 200, 300 ]
console.log(nums00); // [ 100, 200, 300, 400, 500 ]

// splice( 제거할 요소 인덱스, 제거할 요소 개수 ) 사용 -> 원본배열 건드림
let nums01 = [100, 200, 300, 400, 500];

// 1.
// let result = nums01.splice(0, 3);
// console.log(result); // [ 100, 200, 300 ]
// console.log(nums01); // [ 400, 500 ]

// 2.
nums01.splice(3, 2);
console.log(nums01); // [ 100, 200, 300 ]