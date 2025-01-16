

function solution(s) {
    // JadenCase: 모든 단어의 첫 문자가 대문자 그 외의 알파벳은 소문자 
    // 첫 문자가 알파벳이 아닐 때는 이어지는 알파벳은 소문자로 쓰면 됨 
    const arr = s.split(' ');
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();        
        }
    }
    return arr.join(' ');    
}