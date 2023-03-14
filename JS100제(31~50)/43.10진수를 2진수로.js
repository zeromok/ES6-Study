/*
    문제43 : 10진수를 2진수로

    우리가 흔히 사용하는 숫자 1, 8, 19, 28893 등등...은 10진수 체계입니다.
    이를 컴퓨터가 알아 들을 수 있는 2진수로 바꾸려고 합니다. 어떻게 해야할까요?

    **사용자에게 숫자를 입력받고 이를 2진수를 바꾸고 그 값을 출력해주세요.**
*/

function converter(num) {
    // #1. 10진수 -> n진수
    // num.toString(n);

    // #2. n진수 -> 10진수
    // parseInt(n진수값, n);

    // #3. n진수 -> k진수
    // parseInt(n진수값, n).toString(k);

    return num.toString(2);
}

console.log(converter(1023));
