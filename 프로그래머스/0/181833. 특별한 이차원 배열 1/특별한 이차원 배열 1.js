function solution(n) {
    // arr[i][j] i === j 1, 아니면 0
    let result = [];

    for (let i = 0; i < n; i++) {
        result.push([])
        for (let j = 0; j < n; j++) {
            if (i === j) result[i].push(1)
            if (i !== j) result[i].push(0)
        }
    }
    
    return result;
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          