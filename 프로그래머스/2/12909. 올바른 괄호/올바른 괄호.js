function solution(s){
    let stack = [];
    
    if (s[0] === ')') return false;
    
    s.split('').forEach(v => {
        if (v === '(') stack.push('(');
        if (v === ')') stack.pop();
    });
    
    return stack.length === 0 ? true : false ;
}