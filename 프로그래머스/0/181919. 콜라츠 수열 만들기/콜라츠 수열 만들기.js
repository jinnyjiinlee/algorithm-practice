function solution(n) {
    // 현재 값이 x 이면 -> x가 짝수 일 때 2로 나누고, x가 홀수일 때 3 * x + 1  로 바꾸는 계산을 반복하면 x가 반드시1이 된다.
    // 콜라츠 수열
    
    const result = [];
    result.push(n);

    while (result[result.length - 1] !== 1) {
        const lastN = result[result.length - 1]
        if (lastN % 2 === 0) {
            result.push(lastN / 2);
        }
        if (lastN % 2 === 1) {
            result.push((3 * lastN) + 1);
        }
    }
    
    return result;
}