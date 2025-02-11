function solution(numbers) {
    numbers = numbers
        .map(number => number + '')
        .sort((a, b) => (b + a) * 1 - (a + b) * 1)
        .join('');
    
    return numbers[0] === '0' ? '0' : numbers;
}