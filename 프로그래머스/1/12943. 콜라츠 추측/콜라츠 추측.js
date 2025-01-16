function solution(num) {
    // 주어진 수가 1이 될 때까지 다음 작업 반복하면 모든 수를 1로 만들 수 있다
    // 입력된 수가 짝수 -> 나누기 2
    // 입력된 수가 홀수 -> 곱하기 3 + 1
    
    // 위 작업을 몇 번이나 반복해야 하는지 반환하는 함수, solution함수 
    // 주어진 수가 1인 경웅는 0을 작업을 500번 반복해도 1이 되지 않으면 -1 
    let count = 0;
    
    if (num === 1) return 0;
    
    while (num !== 1 && count < 500) {
        // 짝수라면? 
        num % 2 === 0 ? num = num / 2 : num = num * 3 + 1;
        count += 1;
    }
    
    return count >= 500 ? -1 : count;
}