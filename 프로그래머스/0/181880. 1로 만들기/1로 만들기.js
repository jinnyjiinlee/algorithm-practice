function solution(num_list) {
    // 짝수 -> 반으로 나누기
    // 홀수 -> 1을 빼고 반으로 나누기 
    
    let result = 0;
    
    num_list.forEach(v => {
        while (v !== 1) {
            v % 2 === 0 ? v = v / 2 : v = (v - 1) / 2;
            result += 1;
        }
    })
    
    return result;
}