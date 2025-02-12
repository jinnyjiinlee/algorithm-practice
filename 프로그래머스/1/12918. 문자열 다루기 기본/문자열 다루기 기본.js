function solution(s) {
    let count = 0;
    if ((s.length === 4 ) || (s.length === 6)) count++;
    if (s === s.split('').filter(v => +v === Number(v)).join('')) count++;
    
    return  count === 2 ? true : false;
}