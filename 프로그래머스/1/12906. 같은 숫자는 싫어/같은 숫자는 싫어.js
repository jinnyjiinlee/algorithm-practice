function solution(arr) {
    let stack = [];
    
    arr.forEach(v => {
        if ((stack[stack.length - 1]) !== v) stack.push(v);       
    })
    
    return stack;
}