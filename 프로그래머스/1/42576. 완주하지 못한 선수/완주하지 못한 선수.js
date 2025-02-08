function solution(participant, completion) {
    let hash = {};
    
    for (let i of participant) {
        hash[i] = 0;
    }
    
    for (let i of participant) {
        hash[i]++;
    }
    
    for (let i of completion) {
        if (hash[i] > 0) hash[i]--;    
    }

    for (let k in hash ) {
        if (hash[k] > 0) return k;
    }
}