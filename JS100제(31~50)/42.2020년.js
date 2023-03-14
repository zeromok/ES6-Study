/*
    문제42 : 2020년

    2020년 1월 1일은 수요일입니다. 2020년 a월 b일은 무슨 요일일까요?
    두 수 a, b를 입력받아 2020년 a월 b일이 무슨 요일인지 리턴하는 함수 solution을 완성하세요.
    요일의 이름은 일요일부터 토요일까지 각각 SUN, MON, TUE, WED, THU, FRI, SAT 입니다.

    예를 들어 a = 5, b = 24라면 5월 24일은 일요일이므로 문자열 "SUN"를 반환하세요.

    **제한 조건**
    2020년은 윤년입니다.
    2020년 a월 b일은 실제로 있는 날입니다.
    (13월 26일이나 2월 45일 같은 날짜는 주어지지 않습니다.)
*/

function leapYear(Month, Day) {
    // # 1. 원초적인 방법
    /*let param = new Date(2020, a-1, b).getDay();
    switch (param) {
        case 0:
            return "SUN";
        case 1:
            return "MON";
        case 2:
            return "TUE";
        case 3:
            return "WED";
        case 4:
            return "THD";
        case 5:
            return "FRI";
        case 6:
            return "SAT";
    }*/

    // # 2. 향상된
    let days = ["SUN", "MON", "TUE", "WED", "THD", "FRI", "SAT"];
    return days[new Date(2020, Month - 1, Day).getDay()];
}

console.log(leapYear(5, 24));
