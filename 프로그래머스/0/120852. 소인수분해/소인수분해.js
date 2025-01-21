function solution(n) {
    let primeFactors = []; // 소인수를 저장할 배열

    for (let i = 2; i <= n; i++) {
        // n이 i로 나누어 떨어지고, i가 소수인지 확인
        while (n % i === 0) {
            if (!primeFactors.includes(i)) {
                primeFactors.push(i); // 소수인 경우 배열에 추가
            }
            n /= i; // n을 i로 나눔
        }
    }

    return primeFactors;
}
