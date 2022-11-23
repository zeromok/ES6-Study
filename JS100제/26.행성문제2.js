/*
    문제 26. : 행성 문제2

    우리 태양계를 이루는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성이 있습니다.
    이 행성들의 영어 이름은 Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune입니다.

    행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램을 만들어 주세요.
*/

function result(str) {
    let arr = ["수성", "금성", "지구", "화성", "목성", "토성", "천왕성", "해왕성"];

    for(let i=0; i<arr.length; i++) {
        let enArr = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
        if(arr[i] === str) {
            console.log(enArr[i]);
        }
    }
}
result("지구");

/*
    다른 풀이 : 객체를 이용하는 방법
    
    function result(str) {
        let planet = {
            '수성' : 'Mercury',
            '금성' : 'Venus',
            '지구' : 'Earth',
            '화성' : 'Mars',
            '목성' : 'Jupiter',
            '토성' : 'Saturn',
            '천왕성' : 'Uranus',
            '해왕성' : 'Neptune'
        };
        console.log(planet[str]);
    }
    result('지구');
*/