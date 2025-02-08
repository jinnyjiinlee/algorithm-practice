function solution(array, commands) {
    let answer = [];
    
    for (let i of commands) {
        let a = array.slice(i[0] - 1, i[1]);
        a = a.sort((a, b) => a - b);
        
        let b = a[i[2] - 1];
        answer.push(b);
    }
    
    return answer;
}