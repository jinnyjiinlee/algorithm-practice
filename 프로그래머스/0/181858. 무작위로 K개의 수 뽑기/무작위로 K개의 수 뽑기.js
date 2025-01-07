function solution(arr, k) {
    const set = new Set(arr); 
    const uni = [...set];
    
    while (uni.length > k) {
        uni.pop();
    }
    
    while (uni.length < k) {
        uni.push(-1);
    }
    
    return uni;
}