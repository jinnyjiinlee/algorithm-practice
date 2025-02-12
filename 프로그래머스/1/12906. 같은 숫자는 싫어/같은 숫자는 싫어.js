function solution(arr) {

    let stack = [];
    
    arr.forEach(v => {
        if ((stack.length > 0) && (stack[stack.length - 1] === v)) {
            
        } else {
            stack.push(v);
        }
    })
    
    return stack;
}