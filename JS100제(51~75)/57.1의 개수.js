/*
    문제57 : 1의 개수

    0부터 1000까지 1의 개수를 세는 프로그램을 만들려고 합니다.
    예를 들어 0부터 20까지 1의 개수를 세어본다면 1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19에 각각 1이 들어가므로 12개의 1이 있게 됩니다.
    11은 1이 2번 들어간 셈이죠.

    그렇다면 0부터 1000까지의 수에서 1은 몇 번이나 들어갔을까요? 출력해 주세요.
*/
// 0부터 1000 까지 순회하면서
// 각각의 값을 문자열로 변환시켜 1이 있는지 물어보고
// 1있으면 count++
(function () {
    let count = 0;
    for (let i = 0; i < 1001; i++) {
        if(i.toString().includes('1')) count++; // ! 11 이면 하나만 count 되므로 잘못된 접근
    }
    console.log(count);
})();

// 2.
(function () {
    let str = '';
    for (let i=0; i<1001; i++) str+=i;
    // let count = str.split('1').length-1;
    let count = str.match(/1/g).length;
    console.log(count);
})();
