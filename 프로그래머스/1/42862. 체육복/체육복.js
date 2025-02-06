function solution(n, lost, reserve) {
    let canCount = 0; 

    lost.forEach(v => {
        let a = v - 1;
        let b = v + 1;
        
        if (reserve.includes(a) && (!lost.includes(a))) {
            canCount++;
            reserve.splice(reserve.indexOf(a), 1);
        } else if ((reserve.includes(b) && (!lost.includes(b)))) {
            canCount++;
            reserve.splice(reserve.indexOf(b), 1);   
        }
    })
    
    return n - lost.length + canCount;
}