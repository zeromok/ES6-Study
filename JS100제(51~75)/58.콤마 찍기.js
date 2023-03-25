/*
    문제58 : 콤마 찍기

    원범이는 편의점 아르바이트가 끝난 후 정산을 하고자 합니다.
    정산을 빨리하고 집에 가고 싶은 원범이는 프로그램을 만들려고 합니다.

    숫자를 입력받고 천 단위로 콤마(,)를 찍어주세요.

    예를 들어, 123456789를 입력받았으면 123,456,789를 출력해야 합니다.
*/
(function (amount) {
    // 1.
    // console.log(new Intl.NumberFormat().format(amount));

    // 2.
    /*let result = '';
    let fir = amount.toString().substring(0, 3);
    let mid = amount.toString().substring(3, 6);
    let last = amount.toString().substring(6, 9);
    console.log(`${fir},${mid},${last}`);*/

})(123456789);


// 3. 재귀함수 사용
// 종료조건 : 문자열의 길이가 <= 3 일때 더이상 콤마를 찍지 않아도 됨
// 문제의 정의 : 들어온 값의 3자리마다 콤마를 찍어야 한다.
function splitAmount(amount) {
    if (amount.toString().length <= 3) return amount;
    else {
        let first = amount.toString().substring(0, 3);
        return first.concat(',', splitAmount(amount.toString().substring(3)));
    }
}
console.log(splitAmount(123456789));
