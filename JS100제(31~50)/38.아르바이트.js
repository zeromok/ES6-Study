/*
    문제 38. : 호준이의 아르바이트

    호준이는 아르바이트로 영어 학원에서 단어 시험지를 채점하는 일을 하고 있다.
    호준이가 일하는 학원은 매번 1위부터 3위까지의 학생에게 상으로 사탕을 준다.
    그런데 오늘은 마침 사탕이 다 떨어져서 호준이가 채점을 하고 점수를 보내면, 당신이 아이들의 숫자만큼 사탕을 사러 가기로 했다.

    1위 ~ 3위 학생은 여러명일 수 있고 1~3위 학생 중 중복되는 학생까지 포함하여 사탕을 사기로 한다.
    학생들의 점수를 공백으로 구분하여 입력을 받고 사탕을 받을 학생의 수를 출력하세요.

    입력 : 97 86 75 66 55 97 85 97 97 95
    출력 : 6
*/
let score = "97 86 75 66 55 97 85 97 97 95";
let arr = score.split(' ').sort();
console.log('arr : ', arr);

let result = {};
for(let index in arr) {
    let val = arr[index];
    result[val] = result[val] === undefined ? 1 : result[val] + 1;
}
console.log('result : ', result);

let newArr = Object.entries(result);
console.log('newArr : ', newArr);

let sliceArr = newArr.slice(newArr.length - 3, newArr.length);
console.log('sliceArr : ', sliceArr);

let sum = 0;
for(let i=0; i<sliceArr.length; i++) {
    sum += sliceArr[i][1];
}
console.log('resultSum : ', sum);
/*
    나의 접근법 :
    
    1. 입력값들을 배열로 넣어준 후 정렬 -> arr
    2. 배열을 순회하며 중복값 체크와 함께 객체로 만들어줌 -> result
    3. 중복체크한 객체를 다시 배열로 만들어 준 후 -> newArr
    4. 끝 인덱스 3개만 잘라(1, 2, 3순위) 배열을 만들어 준다. -> sliceArr
    5. 자른배열을 순회하며 키값에 해당되는 인덱스를 변수에 담는다. -> sum

    다른 풀이법 :

    pop() : 배열의 마지막 인덱스 값 제거후 반환
    includes() : 특정 문자열을 포함하는지 판별후 true/false 반환

    let arr = score.split(' ').sort( (a, b) => { return a - b });
    let count = 0;
    let newArr = [];
    while(newArr.length < 3) {
        let n = arr.pop();
        if( !newArr.includes(n) ) {
            newArr.push(n);
        }
        count += 1;
    }
    console.log(count);
*/
