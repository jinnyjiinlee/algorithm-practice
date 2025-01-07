function solution(balls, share) {
    return balls === share ? 1 : fac(BigInt(balls)) / (fac(BigInt(balls-share)) * fac(BigInt(share)));
}

function fac(n) {
    let fac = BigInt(1);
    
    for (let i = BigInt(1); i <= n; i++) {
        fac = fac * i;
    }
    
    return fac;
}