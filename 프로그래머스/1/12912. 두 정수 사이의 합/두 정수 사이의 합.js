function solution(a, b) {
    let answer = 0;
    
    if (a > b) {
        let c = a;
        a = b;
        b = c;
    }
    
    for (let i = a; i <= b; i++) {
        answer += i;
    }
    
    return answer;
}