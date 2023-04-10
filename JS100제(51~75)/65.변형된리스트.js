/*
    문제65 : 변형된 리스트

    a = [1, 2, 3, 4]
    b = [a, b, c, d]
    이런 리스트가 있을 때 [[1, a], [b, 2], [3, c], [d, 4]] 이런 식으로 a, b 리스트가 번갈아가면서 출력되게 해주세요.
*/
// 1.
(function () {
    let list1 = [1, 2, 3, 4];
    let list2 = ['a', 'b', 'c', 'd'];
    let result = [];

    for (let i = 0; i < list1.length; i++) {
        let temp = [];
        if (i%2 === 0){
            temp.push(list1[i]);
            temp.push(list2[i]);
            result.push(temp);
        } else {
            temp.push(list2[i]);
            temp.push(list1[i]);
            result.push(temp);
        }
    }
    console.log(result);
})();


// 2.
(function () {
    let list1 = [1, 2, 3, 4];
    let list2 = ['a', 'b', 'c', 'd'];
    let plusList = [...list1, ...list2];

    let result = [];
    for (let i = 0; i < list1.length; i++) {
        let temp = [];
        if(i%2 === 0) {
            temp = [plusList[i], plusList[i + 4]];
            result.push(temp);
        }
        else {
            temp = [plusList[i + 4], plusList[i]];
            result.push(temp);
        }
    }
    console.log(result)
})();

// 3.
(function () {
    let list1 = [1, 2, 3, 4];
    let list2 = ['a', 'b', 'c', 'd'];

    let result = list1.map((e, i) => {
        if(i%2 === 0) return [e, list2[i]];
        else return [list2[i], e];
    });
    console.log(result);
})();
