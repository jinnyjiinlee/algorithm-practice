function solution(n) {
    let count = 0; // 현재까지 찾은 3x 마을 숫자 개수
    let currentNumber = 0; // 현재 확인 중인 숫자

    while (count < n) {
        currentNumber++; // 숫자를 하나씩 증가
        // 3의 배수인지 또는 숫자에 3이 포함되어 있는지 확인
        if (currentNumber % 3 === 0 || String(currentNumber).includes('3')) {
            continue; // 조건을 만족하면 건너뜀
        }
        count++; // 조건을 만족하지 않는 경우 3x 마을 숫자로 간주
    }

    return currentNumber; // n번째 3x 마을 숫자를 반환
}
