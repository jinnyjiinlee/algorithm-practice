function solution(s){
    let stack = 0;
    
    for (let i = 0; i < s.length; i++) {    
        if (s[i] === '(') stack++;
        if (s[i] === ')') stack--;
        
        if (stack === -1) return false;
    }
    
    return stack === 0 ? true : false;
}