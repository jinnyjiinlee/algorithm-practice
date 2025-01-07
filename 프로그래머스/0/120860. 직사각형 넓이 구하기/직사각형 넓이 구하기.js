function solution(dots) {
    let x = dots.map(v => v[0]);
    let y = dots.map(v => v[1]);
    
    let a = Math.max(...x) - Math.min(...x);
    let b = Math.max(...y) - Math.min(...y);
    
    return a * b;
}