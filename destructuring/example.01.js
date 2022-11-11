const arr = ['키보드', '마우스', '모니터'];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

// 변수의 인덱스값(arr[index])을 담아보자
const [a, b, c] = arr;
console.log(a);
console.log(b);
console.log(c);

// 객체 디스트럭처링
const obj = { x: 'a', y: 'b', z: 'c'};

console.log(obj.x); // a
console.log(obj.y); // b
console.log(obj.z); // c

// 변수에 담기 - 키 이름 기준대로 할당이 이루어짐***
const { x, y, z} = obj;
console.log(x); // a
console.log(y); // b
console.log(z); // c

// 원본 프로퍼티 키 와 다른이름의 변수에 넣고 싶으면?
const { x: q, y: w, z: e} = obj;
console.log(q); // a
console.log(w); // b
console.log(e); // c

// 함수 매개변수에 적용
function cook( { time, salty } ) {
    console.log(`요리시간: ${time}분, 간: ${salty}`);
}
cook( { time: '5', salty: '싱거워요'} );

// 배열과 객체의 혼용
const noodles = [
    {
        noodle: '튀긴면',
        soup: '스프',
        topping: '계란',
    },
    {
        noodle: '소면',
        soup: '멸치육수',
        topping: '계란지단',
    },
    {
        noodle: '메밀면',
        soup: '양념장',
        topping: '삶은계란',
    },
];

// 프로퍼티 접근
console.log(noodles[0]);    // { noodle: '튀긴면', soup: '스프', topping: '계란' }

// 프로퍼티 value 접근
console.log(noodles[0].noodle);     // 튀긴면
console.log(noodles[0]["noodle"]);  // 튀긴면

let [{noodle1}] = noodles;      // noodle1 = 튀긴면
let [, {noodle2}] = noodles;    // noodle2 = 소면
let [, , {noodle3}] = noodles;  // noodle3 = 메밀면

// 프로퍼티 key 접근
console.log(Object.keys(noodles[0]));       // [ 'noodle', 'soup', 'topping' ]
console.log(Object.keys(noodles[0])[0]);    // noodle

// 