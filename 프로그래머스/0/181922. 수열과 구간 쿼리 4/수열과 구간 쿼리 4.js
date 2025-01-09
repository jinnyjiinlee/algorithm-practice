function solution(arr, queries) {
    // 각 query마다 순서대로 s ≤ i ≤ e인 모든 i에 대해 
    // i가 k의 배수이면 arr[i]에 1을 더한다.
    queries.forEach(([s, e, k]) => {
        
        for (let i = s; i <= e; i++) {
            if (i % k === 0) arr[i] += 1;
        } 
    });
    
    return arr;
}