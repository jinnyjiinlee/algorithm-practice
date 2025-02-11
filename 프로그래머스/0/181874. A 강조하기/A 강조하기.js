function solution(myString) {
    // 알파벳 a등장 => 전부 A로
    // A가 아닌 모든 대문자 알파벳 -> 소문자로
    return myString.split('')
        .map(v => v.toLowerCase())
        .map(v => {
            if (v === 'a') {
                return 'A'
            } else return v })
        .join('')
    
}