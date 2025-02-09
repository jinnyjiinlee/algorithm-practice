function solution(clothes) {
    let hash = {}
    
    clothes.forEach(v => {
        hash[v[1]] = 0;
    })
    
    clothes.forEach(v => {
        for (let key in hash) {
            if (v[1] === key) hash[key]++;
        }
    })
    
    let arr = Object.values(hash);
    for (let i = 0; i < arr.length; i++) {
        arr[i] += 1;
    }
    
    return arr.reduce((a, b) => a * b, 1) - 1;
}