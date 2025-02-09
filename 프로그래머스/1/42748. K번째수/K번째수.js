function solution(array, commands) {
    let answer = [];
    
    for (let arr of commands) {
        let a = array.slice(arr[0] - 1, arr[1]).sort((a, b) => a - b);
        answer.push(a[arr[2] - 1])
    }
    
    return answer
}