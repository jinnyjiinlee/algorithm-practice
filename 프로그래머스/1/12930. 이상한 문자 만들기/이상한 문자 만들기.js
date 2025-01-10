function solution(s) {    
    return s.split(' ').map(v => {
        return v.split('').map((w, i) => {
            return i % 2 === 0 ? w.toUpperCase() : w.toLowerCase() 
        }).join('');
    }).join(' ');
}
    

