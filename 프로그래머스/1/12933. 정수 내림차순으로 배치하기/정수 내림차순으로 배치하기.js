function solution(n) {
    return +n.toString().split('').map(Number).sort((a, b) => b - a).join('');
}