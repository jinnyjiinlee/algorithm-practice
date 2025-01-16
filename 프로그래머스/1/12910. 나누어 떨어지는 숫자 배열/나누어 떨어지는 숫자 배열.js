function solution(arr, divisor) {
    let result = [];
    
    for (let n of arr) {
        if (n % divisor === 0) result.push(n);
    }
        
    return result.length > 0 ? result.sort((a, b) => a - b) : [-1];
}