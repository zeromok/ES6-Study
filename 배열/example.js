// Q1. make a string out of an array
// 배열 -> 문자열
{
    const fruits = ['apple', 'banana', 'orange'];
    let result = fruits.join(',');
    ;
    console.log('1.', result);
  }
  
  // Q2. make an array out of a string
  // 문자열 -> 배열
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    let result = fruits.split();
    
    console.log('2.', result);
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  // 뒤쪽부터 정렬
  {
    const array = [1, 2, 3, 4, 5];
    let result = array.reverse();

    console.log('3.', result);
  }
  
  // Q4. make new array without the first two elements
  // 1, 2번째 요소가 없는 새로운 배열 생성
  {
    const array = [1, 2, 3, 4, 5];
    let result = array.slice(2, 5);
    // startIndex <= resutl < endIndex

    console.log('4.', result);
  }

  // =======================================================

  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }// end class
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  // score가 90점인 객체 찾기
  {
    let result = students.find( (student) => student.score == 90 );
    console.log('5.', result);
  }
  
  // Q6. make an array of enrolled students
  // enrolled 속성이 true 인 객체들 찾기
  {
    let result = students.filter( (student) => student.enrolled == true );
    console.log('6.', result);
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  // 학생 객체들중 score만으로 배열 생성
  {
    let result = students.map((student) => student.score );
    console.log('7.', result);
  }
  
  // Q8. check if there is a student with the score lower than 50
  // score가 50보다 작은 객체 찾기
  {
    let result = students.find( (student) => student.score < 50 );
    console.log('8.', result);
  }
  
  // Q9. compute students' average score
  // 모든 객체의 score값 평균 구하기
  {
    let result = students.reduce( (pre, cur) => pre + cur.score , 0 );
    let avg = result / students.length;
    console.log('9.', avg);
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
    let result = students.map( (student) => student.score ).join();
    console.log('10.', result);
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
    let result = students.map( (student) => student.score ).sort().join();
    console.log('11.', result);
  }