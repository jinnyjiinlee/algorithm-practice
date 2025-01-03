function solution(s) {
    // 숫자와 'Z'공백으로 담긴 문자열
    // 문자열에 있는 숫자를 차례대로 더하기
    // 'Z'rk 나오면 바로 전해 숫자 빼기 
    
    const stack = [];
    s.split(' ').forEach(v => {
        if(v === 'Z') stack.pop()
        else stack.push(Number(v))
    })
    
    return stack.length ? stack.reduce((a, b) => a + b) : 0;
}