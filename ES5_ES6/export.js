export let arr = [];
export let str = "";

export function setV(name, age) {
    this.arr.push({name: name, age: age});
    return this.arr;
}

export let test = {
    name: 'test',
    age: 30,
}

export let fun = {
    plus: (a, b) => {
        return a + b;
    },
}

export function minus(a, b) {
    return a - b;
}

export function one() {
    return 'one';
}