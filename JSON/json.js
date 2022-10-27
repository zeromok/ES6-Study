

// ====================
// 1. Object -> JSON
// ====================
// 1-1.
let json = JSON.stringify(true);
console.log(json);

// 1-2.
json = JSON.stringify( [ 'apple', 'banana' ] );
console.log(json);

// 1-3.
let rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),

    // 함수는 포함되지 않는다. + Symbol 도
    jump: () => {
        console.log(`${this.name} can jump!`);
    },

};
json = JSON.stringify(rabbit);
console.log(json);

// 1-4.
json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json);

// 1-5.
json = JSON.stringify(rabbit, (key, value) => {
    return key === 'name' ? 'mokk' : value;
});
console.log(json);


// ====================
// 2. JSON -> Object
// ====================
// 2-1. 
json = JSON.stringify(rabbit);
let obj = JSON.parse(json);
console.log(obj);

// 2-2.
rabbit.jump();  // OK
// obj.jump();     // XX

// 2-3.
rabbit.birthDate.getDate(); // 27
// obj.birthDate.getDate();    // XX 여기서의 birthDate는 String

// 데이터 객체로 쓰고싶다면, 바꾸고 싶다면?
let obj1 = JSON.parse(json, (key, value) => {
    return key === 'birthDate' ? new Date : value;
})
obj1.birthDate.getDate();   // 27