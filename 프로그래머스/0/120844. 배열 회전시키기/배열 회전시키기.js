function solution(numbers, direction) {
    if (direction === 'right') {
        // 마지막 원소 저장
        let a = numbers[numbers.length - 1];
        // 마지막 원소 삭제
        numbers.pop();
        // 맨 앞으로 보내기
        numbers.unshift(a);
    } 

    if (direction === 'left') {
        // 첫 번째 원소 저장
        let b = numbers[0];
        // 첫 번째 원소 삭제
        numbers.shift();
        // 맨 뒤로 보낵기
        numbers.push(b);
    }
    
    return numbers;
}