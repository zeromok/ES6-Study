/*
    문제 10. : 별찍기
    
    크리스마스 날, 은비는 친구들과 함께 파티를 하기로 했습니다.
    그런데, 크리스마스 트리를 사는 것을 깜빡하고 말았습니다.
    온 가게를 돌아다녀 봤지만 크리스마스 트리는 모두 품절이었습니다. 
    하는 수 없이 은비는 프로그래밍으로 트리를 만들기로 합니다.

    입력
    5

    출력
        *
       ***
      *****
     *******
    *********
*/

function tree(n) {
    for(let i=0; i<=n; i++){

        for(let j=n-1; j>=i; j--) {

            // process.stdout.write() : 개행없이 출력해준다.
            process.stdout.write(' ');

        }// 공백 : 4, 3, 2, 1

        for(let j=0; j<=(i*2)-2; j++) {

            // process.stdout.write() : 개행없이 출력해준다.
            process.stdout.write('*');

        }// 별 : 1, 3, 5, 7, 9

        console.log(); // 다음줄 : n
        
    }
}
tree(5);