function solution(s) {
    let result = '';
    
    for (let i of s) {
        if ((s.indexOf(i)) === (s.lastIndexOf(i))) {
            result += i;
        }
    }
    
    return result.split('').sort().join('');
}