/*
    문제59 : 빈칸채우기

    총 문자열의 길이는 50으로 제한하고 사용자가 문자열을 입력하면 그 문자열을 가운데 정렬을 해주고, 나머지 빈 부분에는 '='을 채워 넣어주세요.

    입력
    hi

    출력
    ========================hi========================
*/
// 1.
(function (str) {
    let left = '';
    let right = '';
    for (let i = 0; i < Math.floor((50 - str.length) / 2); i++) {
        left += '=';
        right += '=';
    }
    let result = left.concat(str, right);
    console.log(result);
    console.log(result.length);
})('hi')


