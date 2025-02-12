const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const 숫자개수 = Number(input[0]); // 첫 번째 줄: 숫자의 개수
const 숫자배열 = input.slice(1).map(str => str.split('')); // 문자 배열로 변환

let answer = 0;
let stack = [];

for (let i = 0; i < 숫자배열.length; i++) {
    stack = []; // 초기화
    for (let j = 0; j < 숫자배열[i].length; j++) {
        // 스택에 있는 값이 지금 값이랑 같은지 비교
        // 다르면 스택에 넣기 
        if (stack.length > 0 && stack[stack.length - 1] === 숫자배열[i][j]) {
            stack.pop();  // 짝이 맞으면 제거
        } else {
            stack.push(숫자배열[i][j]);  // 새로운 값 추가
        }
    }
    if (stack.length === 0) answer++;
}

// return 으로 했다가 오류님
console.log(answer);



