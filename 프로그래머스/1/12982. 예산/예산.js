function solution(d, budget) {
    let left = budget;
    let count = 0;
    
    let dSorted = d.sort((a, b) => a - b);
    console.log(dSorted)
    
    for (let i = 0; i < dSorted.length; i++) {
        if (dSorted[i] <= left) {
            left -= dSorted[i];
            count++;
        }
    } 
    
    return count;
}