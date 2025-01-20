function solution(s, n) {
    const big = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const small = 'abcdefghijklmnopqrstuvwxyz';
   
    return s.split('').map(v => {
        let index = 0;
        
        if (big.includes(v)) {
            index = big.indexOf(v) + n;
            if (index > big.length - 1) {
                index = index % big.length;
            }
            
            return big[index];
        };
        
        if (small.includes(v)) {
            index = small.indexOf(v) + n;
            if (index > small.length - 1) {
                index = index % small.length;
            }
            
            return small[index];
        };
        
        return v;
    }).join('');
}