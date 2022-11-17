/*
    문제 16. : 로꾸거

    문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

    입력 : 거꾸로
    출력 : 로꾸거
*/

/*
    나의풀이
    : Spread Operator(스프레드 연산자) [...arr] 을 이용하여 문자열 -> 배열 변환
    : reverse() 를 이용해 배열로 들어온 문자요소들의 순서를 뒤집어줌
    : join() 함수에 ('')을 주어 배열의 각 값들을 구분자 없는 문자열로 리턴하도록 함
*/
function result(string) {
    let result = [];
    result = [...string].reverse();
    return console.log(result.join(''));
}
result('거꾸로');