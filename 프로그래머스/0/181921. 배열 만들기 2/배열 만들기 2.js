function solution(l, r) {
     const result = [];
    
    for (let i = l; i <= r; i++) {
        const a = i.toString().split('')
        const b = a.filter(v => v === '5' || v === '0');

        if (a.join('') === b.join('')) result.push(a);
    }
    
    return result.length === 0 ? [-1] : result.map(v => +v.join(''));
}