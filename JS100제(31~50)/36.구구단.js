/*
    문제 36. : 구구단 출력하기

    1~9까지의 숫자 중 하나를 입력하면 그 단의 구구단 결과를 한 줄에 출력하는 프로그램을 작성하세요.

    입력 : 2
    출력 : 2 4 6 8 10 12 14 16 18
*/

function result(n) {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for(let i=0; i<arr.length; i++) {
       console.log(n*arr[i]);
    }
}
result(2);

/*
    다른 풀이법 :
    
    let num = prompt('숫자 입력')
    let result = '';

    for(let i=1; i<=9; i++) {
        result = i * num + ' ';
    }
    console.log(result);
*/