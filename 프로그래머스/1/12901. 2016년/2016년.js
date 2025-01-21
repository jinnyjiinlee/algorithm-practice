function solution(a, b) {
    const date = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const day = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
    
    let sum = 0;
    // a가 5월이라면? 4월 (date[3])까지 모두 더하고 7을 나눈 나머지를 확인한다. 
    if (a !== 1) {
        for (let i = 0; i < a - 1; i++) {
            sum += date[i];
        }
    }
    
    const result = (sum + b) % 7;
    
    return result === 0 ? 'THU' : day[result - 1];
}
