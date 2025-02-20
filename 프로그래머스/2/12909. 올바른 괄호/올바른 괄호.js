function solution(s){
    let stack = [];
    
    for (let i = 0; i < s.length; i++) {
        if (stack.length === 0 && s[i] === ')') return false;
        
        if (s[i] === '(') stack.push(s[i]);
        if (s[i] === ')') stack.pop();
    }
    
    return stack.length === 0 ? true : false;
}