/*
    문제62 : 20190923출력하기

    20190923을 출력합니다.  아래 기준만 만족하면 됩니다.

    1. 코드 내에 숫자가 없어야 합니다.
    - 예) console.log(20190923)이라고 하시면 안됩니다.
    2. 파일 이름이나 경로를 사용해서는 안됩니다.
    3. 시간, 날짜 함수를 사용해서는 안됩니다.
    4. 에러 번호 출력을 이용해서는 안됩니다.
    5. input을 이용해서는 안됩니다.
    6. 숫자 사용 금지
*/
// 1.
(function () {
    let str = 'aaabccddddddddddeffffffffffggghhhh';
    let benchMark = str[0];
    let count = 0;
    let arr = [];
    for (const element of str) {
        if (benchMark === element) {
            count++;
        } else {
            arr.push(String(count - 1));
            count = 1;
            benchMark = element;
        }
    }
    arr.push(String(count - 1));
    console.log(arr.join(""));
})();

// 2.
(function () {
    let str = 'aaabccddddddddddeffffffffffggghhhh';
    let duplication = [...new Set(str)];
    let result = '';
    let resultArr = [];
    for (let item of duplication) {
        let regex = new RegExp(`${item}`, 'g');

        result = result.concat(String(str.match(regex).length - 1));
        resultArr.push(str.match(regex).length - 1);
    }
    console.log(`1. ${result}\n2. ${resultArr.join("")}`);
})();

