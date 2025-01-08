function solution(a, d, included) {
    let seq = [];
    let result = 0;
    
    seq.push(a);
    for (let i of included) {
        seq.push(seq[seq.length -1] + d);
    }
    
    included.forEach((v, i) => {
        if (v) result += seq[i];
    })
    
    return result;
}