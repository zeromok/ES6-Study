
// require()를 이용한 CommonJS를 사용하는 동안 TypeScript 타이핑(인텔리센스 / 자동 완성)을 사용하려면, 다음 방법을 쓰세요.
// node.js를 쓸 때 모듈을 불러오는 설정
// const axios = require('axios').default;

// ==============
// 모듈 불러오기
// ==============
import axios from "axios";


// ==============
// Axios 전역설정
// ==============
/*
    모든 요청에 적용되는 설정의 default 값을 전역으로 명시할 수 있다.
    주로 서버에서 서버로 axios를 사용할때 요청 헤더를 명시하는데 자주 쓰인다.
*/
axios.defaults.baseURL = "url";
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// =========
// 문법예시
// =========
axios({
    method: "get", // 통신방식
    url: " https://api.github.com/users", // 요청을 보낼 서버 주소
    headers: {}, // 요청헤더 설정
    params: {}, // 쿼리 스트링 전달
    responseType: 'json',  // default
    maxContentLength: 2000, // http 응답 내용의 max 사이즈
    validateStatus: function (status) { // HTTP응답 상태 코드에 대해 promise의 반환 값이 resolve 또는 reject 할지 지정
        return status >= 200 && status < 300; // default
    },
    proxy: {
        host: "",
        port: 8080,
        auth: {
            username: "id",
            password: "pw"
        }
    }, // proxy서버의 hostname과 port를 정의
    maxRedirects: 5, // node.js에서 사용되는 리다이렉트 최대치를 지정
    httpsAgent: new https.Agent({ keepAlive: true }) // node.js에서 https를 요청을 할때 사용자 정의 agent를 정의
})
    .then(function (response) { // 응답 메세지 전문
        console.clear();
        console.log(response.status); // 응답 상태값
        console.log(response.statusText); // 응답 HTTP 상태 메세지
        console.log(response.headers); // 응답 메세지 헤더
        console.log(response.config); // 'axios'에 설정 구성
        console.log(response.data); // 응답 메세지 안 데이터
        console.log(response.request); // 응답을 생성한 요청 전문, 브라우저: XMLHttpRequest 인스턴스 || Node.js: ClientRequest 인스턴스(리디렉션)
    })


// ====
// GET
// ====

// 단축메소드
axios.get(
    "http://125.6.37.225:8100/settlement/summaries",
    {
        headers: {},
        params: { client: '1068146657', date: '' },
        responseType: JSON
    })
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        // 에러 핸들링
        console.log(error.response.data);
    })
    .finally(function (response) {
        // 항상 실행되는 영역
    })


// =====
// POST
// =====
axios.post(
    "url",
    {
        headers: { // POST 요청을 보낼 때 주의할 점은 요청 본문이 문자열일 때 Content-Type 헤더가 text/plain;charset=UTF-8로 기본 설정된다. (JSON으로 바꾸어 줌)
            'Content-Type': 'application/json;charset=utf-8'
        },
        params: {
            param1: "",
            param2: ""
        }
    }
)
    .then(function (response) {
        // response
    })
    .catch(function (error) {
        // 에러 핸들링
    })
    .finally(function (response) {
        // 항상 실행되는 영역
    })