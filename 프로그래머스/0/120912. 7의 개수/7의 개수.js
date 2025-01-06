function solution(array) {
    // array: 배열
    
    // 각 배열을 돌면서 7이 들어있는지 확인한다.
    // 각 배열 안에 요소 접근
    // 각 요소 내에 문자열도 하나씩 접근 (배열로 다시 만들기)
    
    const arr = array.map(v => {
        return v.toString().split('').filter(a => a === '7').length;
    })
    
    return arr.reduce((a, b) => a + b);
}