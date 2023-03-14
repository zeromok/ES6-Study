/*
    문제41 : 소수판별

    숫자가 주어지면 **소수인지 아닌지 판별하는 프로그램**을 작성해주세요.
    소수이면 YES로, 소수가 아니면 NO로 출력해주세요.
    (소수 : 1과 자기 자신만으로 나누어떨어지는 1보다 큰 양의 정수)
*/

function discrimination(num) {

    // # 1. 가장 원초적인 방법
    /*for (let i = 2; i < num; i++) {
        if (num % i === 0) return "NO";
    }
    return "YES";*/

    // # 2. 자기자신을 제외하고 절반을 초과하는 숫자에서는 나머지 0이 나올 수 없다.
    /*for (let i = 2; i < num / 2; i++) {
        if (num % i === 0) return "NO";
    }
    return "YES";*/

    // # 3. 해당숫자에 루트를 씌워 확인
    for (let i = 0; i * i < num; i++) {
        if (num % i === 0) return "NO";
    }
    return "YES";
}

console.log(discrimination(4));
