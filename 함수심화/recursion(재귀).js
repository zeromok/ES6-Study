/*
    재귀 :  큰 목표 작업 하나를 동일하면서 간단한 작업 여러 개로 나눌 수 있을 때 유용한 프로그래밍 패턴입니다. 
*/

// x 를 n번 제곱해 주는 함수를 만들어보자
    // 명령형
    function pow(x, n) {
        let result = 1;

        for(let i=0; i<n; i++) {
            result *= x;
        }
        return result;
    }
    console.log(pow(2, 3)); // 8

    // 선언형
    function pow1(x, n) {
        return Math.pow(x, n);
    }
    console.log(pow1(2, 3)); // 8

    // 재귀적인 사고 -> 작업을 단순화 하고, 자기 자신을 호출함
    function pow2(x, n) {
        if( n == 1 ) {
            return x;
        }else {
            return x * pow2( x, n - 1 );
        }
    }
    /*
        Ex)
        pow(2, 4) = 2 * pow(2, 3)
        pow(2, 3) = 2 * pow(2, 2)
        pow(2, 2) = 2 * pow(2, 1)
        pow(2, 1) = 2
    */
    console.log(pow2(2, 3));

    // 단순화
    function pow3(x, n) {
        return (n == 1) ? x : (x * pow3(x, n - 1));
    }


// ======================
// 재귀적 순회
// ======================