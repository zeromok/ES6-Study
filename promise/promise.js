// promise : 비동기를 간편하게 처리해주는 Object

//Promise : Object for Asynchronous Operation


// state : 상태, 기능이 수행중인지, 기능수행이 완료되어 성공인지 실패인지
// 

// Producer vs Consumer

// ====================
// Producer - 정보를 제공하는
// ====================
// when new Promise is created, the executor runs automatically. ***
const promise = new Promise((resolve, reject) => {
    // resolve : 기능을 정상적으로 수행해서 마지막에 최종 데이터를 전달  
    // reject : 기능을 수행하다 문제가 생기면 호출

    // doing some heavy work - Network, Read Files
    console.log('doing something...');

    setTimeout(() => {
        resolve('ellie');
        reject(new Error('no network'));
    }, 1000);

});


// ====================
// Consumer - 정보를 제공받는, 소비하는
// ====================
// then / catch / finally

promise
    .then( (value) => {   // value : 위에서의 리턴값(resolve) : ' ellie'
        console.log(value);
    })
    .catch( (error) => {
        console.log(error);
    })
    .finally( () => {
        console.log('fianlly');
    });     // 성공, 실패 상관없이 무조건 호출


// ====================
// Promise Chaning - 프로미스 연결하기
// ====================
const fetchNumber = new Promise( (resolve, reject) => {
    setTimeout( () =>  resolve(1) , 1000);
});

fetchNumber
    .then( (num) => num * 2 )   // 2
    .then( (num) => num * 3 )    // 6
    .then( (num) => {
        return new Promise( (resolve, reject) => {
            setTimeout( () => { resolve(num - 1) }, 1000);
        });
    })
    .then( (num) => {
        console.log(num)
    });


// ====================
// Error Handling
// ====================
const getHen = () => 
    new Promise( (resolve, reject) => {
        setTimeout( () =>  resolve('닭') , 1000 )
    });
const getEgg = (hen) => 
    new Promise( (resolve, reject) => {
        // setTimeout( () =>  resolve(`${hen} => 에그` ) , 1000 )
        setTimeout( () =>  reject(new Error(`error ! ${hen} => 에그`)) , 1000 )
        
    });
const cook = (egg) => 
    new Promise( (resolve, reject) => {
        setTimeout( () =>  resolve(`${egg} => 프라이`) , 1000 )
    });

getHen()
    // .then( hen =>  getEgg(hen)  )
    // .then( egg =>  cook(egg)  )
    // .then( meal =>  console.log(meal)  );
    .then(getEgg)
    .catch(error => {
        return '빵';
    })
    .then(cook)
    .then(console.log)
    .catch(console.log);


// =========================
// () => {}, () => () // 중괄호, 소괄호
// =========================
let a = () => {
    return 'Hello';
}
console.log(a());
// 명시적인 return 필요

let b = () => (
    'Hello b'
);
console.log(b());
// () 자체가 리턴

