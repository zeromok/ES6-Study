/*
    문제 9 : concat을 활용한 출력 방법

    다음 소스 코드를 완성하여 날짜와 시간을 출력하시오

    데이터
    var year = '2019';
    var month = '04';
    var day = '26';
    var hour = '11';
    var minute = '34';
    var second = '27';

    var result = //빈칸을 채워주세요

    console.log(result);


    출력
    2019/04/26 11:34:27
*/

// 답
let year = '2022';
let month = '11';
let day = '16';
let hour = '16';
let minute = '00';
let second = '00';

let result = year.concat('/', month, '/', day, ' ', hour, ':', minute, ':', second);
console.log(result);