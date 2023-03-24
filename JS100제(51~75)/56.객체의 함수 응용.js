/*
    문제56 : 객체의 함수 응용

    다음의 객체가 주어졌을 때 한국의 면적과 가장 비슷한 국가와 그 차이를 출력하세요.

    데이터
    nationWidth = {
    'korea': 220877,
    'Russia': 17098242,
    'China': 9596961,
    'France': 543965,
    'Japan': 377915,
    'England' : 242900,
    }

    출력
    England 22023
*/
let nationWidth = {
    'korea': 220877,
    'Russia': 17098242,
    'China': 9596961,
    'France': 543965,
    'Japan': 377915,
    'England' : 242900,
};
// 1.
(function (data) {
    let {korea, ...rest} = nationWidth;
    // 각나라의 면적에서 한국면적을 뺴고 난 후 값이 작은 나라가 비슷한국가
    // value 의 값 === 각 나라의 면적 - 한국면적 중 가장 값이 작은 값
    let value = Object.values(rest).map( item => item - korea).sort((a,b) => a - b)[0];
    for (let item in rest) {
        if(rest[item] === value + korea) console.log(`${item} / ${rest[item] - korea}`)
    }
})(nationWidth);

// 2. 2차원 배열 접근
(function (data) {
    let {korea, ...rest} = nationWidth;
    let restArr = Object.entries(rest);
    // Math.max() 에 인자로 배열을 넘겨주려 .apply() 사용
    let ab = Math.max.apply(null, Object.values(rest));
    let item = [];
    for (let j in restArr) {
        if (ab > restArr[j][1] - korea) {
            ab = restArr[j][1] - korea;
            item = restArr[j];
        }
    }
    console.log(`${item[0]} / ${item[1] - korea}`)
})(nationWidth);