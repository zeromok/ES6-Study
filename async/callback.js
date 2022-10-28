
// 자바스크립트는 동기적 이다.
console.log('1');
setTimeout( () => console.log('2') , 1000 );
console.log('3');

// ======================
// Synchronous Callback - 즉각적인 동기적 실행
// ======================
function printImmediately(print) {
    print();
}
printImmediately( () => console.log('Hello') );

// ======================
// Asynchronous Callback - 언제실행될지 알 수 없는 : 비동기
// ======================
function printWithDelay(print, timeout) {
    (print, timeout);
}
printWithDelay( ()=> console.log('Async callback'), 2000);

// =======================
// 콜백지옥
// =======================
class UserStorage {

    loginUser(id, password, onSuccess, onError) {
        setTimeout( () => {
            if(
                (id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')
            ) {
                // 받아오는 값
                onSuccess(id)
            }else {
                onError(new Error('not found'));
            }
        }, 2000);
    }// loginUser()

    
    getRoles(user, onSuccess, onError){
        setTimeout( () => {
            if(user === 'ellie') {
            // 받아오는 값
                onSuccess({name: 'ellie', role: 'admin'});
            }else {
                onError(new Error('no access'));
            }
        }, 1000);
    }// getRoles()

}// end class

// ============================================================

// 클래스 생성
const userStorage = new UserStorage();

// 인자 값 입력 받기
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.loginUser(
    id,
    password,
    // onSuccess(id), 받아오는 값들
    (user) => {
        // 성공했다면, 그 정보를 이용해 
        userStorage.getRoles(
                user,
                (userWithRole) => {
                    alert(`Hello ${userWithRole.name} you have a ${userWithRole.role} role`);
                },
                (error) => {
                    console.log(error);
                }
            );
        },
    (error) => {
        console.log(error);
    },
    //  onError(new Error('not found')), 받아오는 값
    (error) => {console.log(error)
    } 
);