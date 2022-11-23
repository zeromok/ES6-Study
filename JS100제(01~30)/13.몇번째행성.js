/*
    문제 13. : 몇 번째 행성인가요?

    우리 태양계를 이루고 있는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성으로 총 8개 입니다. 저희는 우리 태양계의 n번째 행성이 무엇인지 알고 싶습니다.
    입력으로 행성의 순서를 나타내는 숫자 n이 입력됩니다. 
    출력으로 그 순서에 해당하는 행성의 이름을 출력해 주세요.
    예를들어 1이 입력되면, 첫번째 행성인 수성이 출력됩니다.

    입력 : 1
    출력 : 수성
*/

// 나의 풀이 - swich문 사용
function search(n) {
    switch(n) {
        case 1: console.log('수성');
            break;
        case 2: console.log('금성');
            break;
        case 3: console.log('지구');
            break;
        case 4: console.log('화성');
            break;
        case 5: console.log('목성');
            break;
        case 6: console.log('토성');
            break;    
        case 7: console.log('천왕성');
            break;
        case 8: console.log('명왕성');
            break;
        default: console.log('다시 시도해 주세요.');
    }
}
search(1);

// 다른 풀이 - 배열사용
const planets = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '명왕성'];
function search(n) {
    console.log(planets[n-1]);
}