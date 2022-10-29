// promise : 비동기를 간편하게 처리해주는 Object

//Promise : Object for Asynchronous Operation


// stste : 상태, 기능이 수행중인지, 기능수행이 완료되어 성공인지 실패인지
// 

// Producer vs Consumer

// ====================
// Producer
// ====================
// when new Promise is created, the executor runs automatically. ***
const promise = new Promise((resolve, reject) => {
    // doing some heavy work - Network, Read Files
    console.log('doing something...');
    setTimeout(() => {
        // resolve('ellie');
        reject(new Error('no network'));
    }, 1000);
});


// ====================
// Consumer
// ====================
// then / catch / finally

promise
    .then((value) => {   // value : 위에서의 리턴값 : ' ellie'
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log('fianlly');
    });     // 성공, 실패 상관없이 무조건 호출


// ====================
// Promise Chaning
// ====================