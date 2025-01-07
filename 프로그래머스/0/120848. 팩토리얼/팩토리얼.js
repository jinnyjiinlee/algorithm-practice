function solution(n) {
    // 정수 n이 주어질 때, 다음 조건을 만족하는 가장 큰 정수 i를 return 
    let result = 1;
    
    for (let i = 1; i <= n; i++) {
        result *= i;
        if (result === n) return i;
        
        if (result > n) {
            return i -1;
        }
    }
}