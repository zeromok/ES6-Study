/*
    문제 30. : 문자열 속 문자 찾기

    문자 pineapple에는 apple이라는 문자가 숨어 있습니다. 원범이는 이렇듯 문자열 속에 숨어있는 문자를 찾아보려고 합니다.
    첫번째 입력에서는 문자열이 입력되고, 두번째에는 찾을 문자가 입력되어야 합니다.
    그 문자가 시작하는 index를 반환하는 프로그램을 만들어 주세요

    입력
    pineapple is yummy
    apple

    출력
    4
*/

function result(str, inStr) {
    for(let i=0; i<str.length; i++) {
        if(str[i] === inStr[0]) {
            return console.log(i);;
        }
    }
}
result('pineapple is yummy', 'apple');

/*
    다른 풀이법 : indexOf() 이용하기

    indexOf() : 호출한 스트링 객체나 배열에서 주어진 값과 일치하는 값 또는, 요소의 첫 번째 인덱스를 반환하고 아니면 -1 반환

    function result(str, inStr) {
        console.log(str.indexOf(inStr));
    }
    result('pineapple is yummy', 'apple'); -> 4
*/