function solution(n, lost, reserve) {
    let answer = 0;
    let hash = {};
    
    for (let i = 1; i <= n; i++) {
        hash[i] = 1;
    }
    
    lost.forEach(v => {
        for (let key in hash) {
            if (v === Number(key)) hash[key]--;
        }
    })
    
    reserve.forEach(v => {
        for (let key in hash) {
           if (v === Number(key)) hash[key]++;
        }
    })
    
    for (let i = 1; i <= n; i++) {
        if((hash[i] === 2) && hash[i - 1] === 0) {
            hash[i - 1]++;
            hash[i]--;
        }
        
        if((hash[i] === 2) && hash[i + 1] === 0) {
            hash[i + 1]++;
            hash[i]--;
        }
    }
    
    for (let key in hash) {
        if (hash[key] >= 1) answer++;
    }
    
    return answer;
}