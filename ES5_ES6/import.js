import * as obj from './export.js';

console.log(obj.test);

console.log(obj.fun.plus(1, 2));

console.log(obj.minus(3, 1));


let isNull = {
    minus: obj.minus(5, 1),
    test: {
        one: obj.one(),
    }
}

console.log(isNull.minus);
console.log(isNull.test.one);

console.log(obj.setV('안녕', 30));