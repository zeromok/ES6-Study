/*
    문제 37. : 반장선거

    새 학기를 맞아 호준이네 반은 반장 선거를 하기로 했습니다.
    그런데 표를 하나씩 개표하는 과정이 너무 번거롭게 느껴진 당신은
    학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램을 작성하기로 하였습니다.

    == 입력 ==
    원범 원범 혜원 혜원 혜원 혜원 유진 유진
    == 출력 ==
    혜원(이)가 총 4표로 반장이 되었습니다.
*/
let str = "원범 원범 혜원 혜원 혜원 혜원 유진 유진";
let strArr = str.split(' ');
console.log("strArr : ", strArr);
let result = {};
for(let index in strArr) {
    let val = strArr[index];
    result[val] = result[val] === undefined ? 1 : result[val] + 1;
}
console.log("result : ", result);
let winner = Object.keys(result).reduce( (a, b) => { 
    return result[a] > result[b] ? a : b
});
console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);
/*
    접근방법 :
    1. 입력값들을 배열에 집어넣기 -> strArr
    X. 배열을 순회하며 중복값 체크? -> 이 문제와는 다른 접근 방식
    2. 배열을 순회하며 객체로 만들기 -> result
    3. 객체의 키값들을 뽑아내( Object.keys() ) 그, 배열을 순회( reduce() )하며 실행값 반환
*/