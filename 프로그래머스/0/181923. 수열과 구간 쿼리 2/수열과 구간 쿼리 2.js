function solution(arr, queries) {
    let result = [];
    queries.forEach(([s, e, k]) => {
        let arrI = [];
        let list = [];

        for (let i = s; i <= e; i++) {
            arrI.push(i); 
        }

        for (let i of arrI) {
            list.push(arr[i]);
        }
        
        list = list.filter(a => a > k);
        list.sort((a, b) => a - b)[0] ? result.push(list.sort((a, b) => a - b)[0]) : result.push(-1);
    })
    
    return result;
}