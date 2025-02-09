function solution(clothes) {
    const hash = {};
    
    for (let ele of clothes) {
        if (!hash[ele[1]]) {
            hash[ele[1]] = 0;
        }
        hash[ele[1]] += 1;
    }    
      
    return Object.values(hash).reduce((a, b) => a * (b + 1), 1) - 1;
}