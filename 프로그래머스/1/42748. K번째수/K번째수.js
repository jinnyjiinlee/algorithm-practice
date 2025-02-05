function solution(array, commands) {
    let result = [];
    
    commands.forEach(v => {
        let arr = [];
        arr = array.slice(v[0] - 1, v[1]);
        arr.sort((a, b) => a - b);
        result.push(arr[v[2] - 1])
    })

    return result;
}