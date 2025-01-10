function solution(t, p) {
    const number = [];
    
    for (let i = 0; i < t.length - p.length + 1; i++) {
        number.push(t.slice(i, i + p.length));
    }
    
    return number.filter(v => +v <= +p).length;
}