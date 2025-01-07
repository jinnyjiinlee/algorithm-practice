function solution(numbers, direction) {
    // numbers: 정수가 담긴 배열
    // direction: left or right
    
    if (direction === 'right') {
        // 마지막 배열 저장
        const last = numbers[numbers.length - 1];
        // 마지막 배열 삭제
        numbers.pop();
        // 마지막 배열 저장된 것을 맨 처음 배열로 넣기
        numbers.unshift(last);
    }
    
    if (direction === 'left') {
        // 맨 처음 배열 저장
        const first = numbers[0]
        // 맨 처음 배열 삭제
        numbers.shift();
        // 맨 처음 배열 저장된 것을 마지막 배열로 넣기 
        numbers.push(first);
    }
    
    return numbers;
}