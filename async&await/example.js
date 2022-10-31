
// async & await
// clear style of using promise


// =========================
// Async
// =========================

// 동기적인 실행
function fetchUser() {
    return 'ellie';
}
const user1 = fetchUser();
console.log(user1);

// 비동기적 실행
function fetchUser() {
    return new Promise( (resolve, reject) => {
       resolve('ellie');

    });
}
const user2 = fetchUser();
user2.then(console.log)

// async 사용
async function fetchUser() {
    return 'ellie';
}
const user3 = fetchUser();
user3.then(console.log)

