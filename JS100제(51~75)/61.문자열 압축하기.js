/*
    # 문제61 : 문자열 압축하기

    문자열을 입력받고 연속되는 문자열을 압축해서 표현하고 싶습니다.

    입력
    aaabbbbcdddd

    출력
    a3b4c1d4
*/
// 1.
// (function (str) {
//     let count = 0;
//     let result = '';
//     for (let i = 0; i < str.length; i++) {
//         if(str.charAt(i) === str.charAt(i+1)){
//             count++;
//         }else {
//             result += str.charAt(i) + (count + 1);
//             count = 0;
//         }
//     }
//     console.log(result);
// })('aaabbbbcdddd')


// 2.
(function (str) {
    let result = '';
    let count = 0;
   str.split("")
       .map((item, idx, arr) => {
           if (item === arr[idx + 1]) {
               count++;
           } else {
               result = result.concat(item + (count + 1));
               count = 0;
           }
       });
    console.log(result);
})('aaabbbbcdddd')

