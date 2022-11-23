/*
    민주는 체육부장으로 체육시간이 되면 반 친구들이 제대로 키 순서대로 모였는지를 확인해야 한다.
    그런데 요즘 민주는 그것이 너무 번거롭게 느껴져 한 번에 확인하고 싶어한다. 

    민주를 위해 키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램을 작성해보자.
    (키는 공백으로 구분하여 입력됩니다.)
*/

// let arr = prompt("키를 입력 하세요.").split(' ');
let arr = [155, 156, 165, 166, 169, 176];
function result(arr) {
    for(let i=0; i<arr.length - 1; i++) {
        if(arr[i] > arr[i+1]){
            return 'NO';
        }else {
            return'YES';
        }
    }
}
console.log(result(arr));

/*
    다른풀이법 -> sort()이용

    let unsort = prompt('키를 입력하세요.');
    let sort = '';

    sort = unsort.split('').sort( (a, b) => { return a - b; } ).join(' ');

    if(unsort === sort) {
        console.log('YES');
    }else {
        console.log('NO');
    }
*/