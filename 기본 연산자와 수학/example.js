
console.clear();

let a = 1, b = 1;
console.log(a, b);
let c = ++a;
console.log(c);
let d = b++;
console.log(d);
// a = 1, b = 1, c = 2, d = 1

console.log(a, b, c, d); // 2, 2, 2, 1

let x = 2;
let y = 1 + (x *= 2);
console.log(x, y);  // 4, 5