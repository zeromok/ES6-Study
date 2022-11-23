/*
    문제 19. : 제곱을 구하자

    공백을 구분하여 두 숫자 a와 b가 주어지면, a의 b승 을 구하는 프로그램을 작성하세요.
*/

let a = 2;
let b = 3;
function result(a, b) {
    return Math.pow(a, b);
}
console.log(result(a, b));

/*
    Math.pow(base, exponent) : 제곱해주는 함수 base^exponent
    만약 base값이 음수이고, exponent값이 정수가 아닌경우 -> NaN
*/