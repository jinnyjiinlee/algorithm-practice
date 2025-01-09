function solution(arr, queries) {
    queries.forEach(([s, e]) => {
        let arrI = [];
        
        for (let i = 0; i < 1000; i++) {
            if ((s <= i) && (i <= e)) {
                arrI.push(i);
            } 
        }
        
        arrI.forEach(v => arr[v] += 1);
    });
    return arr;
}