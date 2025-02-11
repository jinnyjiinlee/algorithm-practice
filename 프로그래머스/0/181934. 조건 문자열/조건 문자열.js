function solution(ineq, eq, n, m) {
    if ((ineq === '<') && (eq === '=')) {
        if (n <= m) return 1;
    }
        
    if ((ineq === '<') && (eq === '!')) {
        if (n < m) return 1;
    }
        
    if ((ineq === '>') && (eq === '=')) {
        if (n >= m) return 1;
    }
        
    if ((ineq === '>') && (eq === '!')) {
        if (n > m) return 1;
    }
    
    return 0;
}