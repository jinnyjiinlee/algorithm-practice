function solution(arr) {
    let stack = [];
    
    arr.forEach(v => {
        if (stack.length === 0) stack.push(v);
        if (stack[stack.length - 1] !== v) stack.push(v);
    })
    
    return stack
}