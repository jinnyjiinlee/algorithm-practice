function solution(n) {
    // n이 매개변수로 주어질 때, n이 제곱수라면 1 아니면 2
    for (let i = 0; i < 10000; i++) {
        if (i * i === n) return 1
    }
    
    return 2
}