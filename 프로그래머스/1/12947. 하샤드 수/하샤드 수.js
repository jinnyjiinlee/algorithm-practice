function solution(x) {
    return x % (x.toString().split('').map(Number).reduce((a, b) => a + b))  === 0;
}