function solution(num_list, n) {
    // num_list: 정수 리스트
    // n: 정수
    
    // n 번째 원소 이후의 원소들
    const a = num_list.slice(n);
    
    // n 번째까지의 원소들
    const b = num_list.slice(0, n);
    
    return (a + b).split('').filter(v => v !== ',').map(Number);
}