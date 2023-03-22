/*
    문제49 : quick sort

    다음 빈 칸을 채워 퀵 정렬을 완성해주세요.
*/
function quickSort(arr){
    debugger;
    // console.log(`arr : ${arr}`);
    if (arr.length <= 1){
        return arr;
    }

    const pivot = arr[0];
    const left = [];
    const right = [];
    console.log(`pivot : ${pivot}`);

    for (let i=1; i<arr.length; i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    // console.log(`left : ${left}, right : ${right}`);
    console.log(`result : ${left.concat(pivot, right)}`);
    return quickSort(left).concat(pivot, quickSort(right));
}

const array = [5, 1, 7, 4, 6, 3, 2, 8];

console.log(quickSort(array));