function solution(q, r, code) {
    // code의 각 인덱스를 q로 나누었을 때 나머지가 r인 위치의 문자를 앞에서순서대로 붙은 문자열 return
    let result = [];
    
    // code의 각 인덱스를 q로 나누었을 때 
    for (let i = 0; i < code.length; i++) {
        if (i % q === r) {
            result.push(code[i])
        }
    }
    return result.join('');
}