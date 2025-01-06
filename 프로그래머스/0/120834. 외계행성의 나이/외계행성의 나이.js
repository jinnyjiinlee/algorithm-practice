function solution(age) {
    // 나이를 알파벳으로 말하기
    // a는 0, b는 1, c는 2
    
    let chars = 'abcdefghijklmnopqrstuvwyz'.split('');
    
    return String(age).split('').map((v,i) => v = chars[+v]).join('');
}