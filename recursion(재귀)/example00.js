

// ? 재귀 : 큰 목표 작업 하나를 동일하면서 간단한 작업 여러 개로 나눌 수 있을 때 유용한 프로그래밍 패턴
// 문제 해결을 하다 보면 함수에서 다른 함수를 호출해야 할 때가 있습니다.
// 이때 함수가 자기 자신을 호출할 수도 있는데, 이를 재귀 라고 부릅니다.


// * x 를 n 제곱 해주는 함수 pow(x, n)

// 1. pow(2, 3) = 8
(function pow(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) { // 반복문을 돌면서 x를 n번 곱함
        result *= x;
    }
    console.log(result); // 8
})(2, 3);

// 2. 재귀적 사고
function pow(x, n) {
    console.log(`pow(${x}, ${n}) 호출`)
    debugger;
    return (n === 1) ? x : (x * pow(x, n - 1));
}
console.log(pow(2, 4));

// 실행 컨텍스트 : pow(2, 4) 호출순서 1 || 실행순서 4
// SUB 실행 컨텍스트 : pow(2, 3) 호출순서 2 || 실행순서 3
// SUB SUB 실행 컨텍스트 : pow(2, 2) 호출순서 3 || 실행순서 2
// SUB SUB SUB 실행 컨텍스트 : pow(2, 1) 호출순서 4 || 실행순서 1 반환하면서 메모리에서 컨텍스트 제거

// 실행순서 === "후입 선출" 마지막 실행 컨텍스트 부터 타고 올라옴
// 재귀의 베이스 == 작업을 아주 간단하게 만들어서 함수가 더 이상은 서브 호출을 만들지 않게 해주는 인수 Ex) pow(2, 1)
// 재귀깊이 == 실행 컨텍스트의 최대값


// * 주어진 숫자까지 모두 더하기
function sumTo(n) {
    if (n === 1) return 1;
    return n + sumTo(n-1);
}
console.log(sumTo(2));