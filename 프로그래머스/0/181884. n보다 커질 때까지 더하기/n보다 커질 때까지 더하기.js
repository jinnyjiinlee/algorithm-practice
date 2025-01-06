function solution(numbers, n) {
    // numbers: 정수배열, n: 정수
    
    // numbers의 원소를 앞에서부터 하나씩 더하다가 합이 n보다 커지면? 
    // 지금까지 더했던 원소들의 합을 return 
    let sum = 0;
    
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
        
        if (sum > n) return sum;
    }   
}