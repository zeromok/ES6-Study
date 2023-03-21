/*
    문제50 : 버블정렬 구현하기

    버블정렬은 두 인접한 원소를 검사하여 정렬하는 방법을 말합니다. 시간 복잡도는 느리지만 코드가 단순하기 때문에 자주 사용됩니다.
    아래 코드의 빈 칸을 채워 버블 정렬을 완성해 봅시다.
*/
function bubble(arr) {
    let result = arr.slice();

    for (let i = 0; i < result.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (result[j] > result[j + 1]) {
                let temp = result[j];
                result[j] = result[j + 1];
                result[j + 1] = temp;
            }
        }
        console.log(`${i} 번째 순회 : ${result}`);
    }
    return result;
}

const items = ['5', '1', '7', '4', '6', '3', '2', '8'].map((n) => {
    return parseInt(n, 10);
});

console.log(bubble(items));