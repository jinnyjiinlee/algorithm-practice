function solution(myString) {
    // myString: 문자열
    // 알파벳 a가 등장하면 전부 A로 변환
    // A아닌 모든 대문자 알파벳 -> 소문자로 변환
    
    return [...myString].map(v => {
        if (v === 'a') return 'A';
        if ((v !== 'A') && (v.toUpperCase() === v)) {
            return v.toLowerCase();
        } else {
            return v;
        }
    }).join('');
}