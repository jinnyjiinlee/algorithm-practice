function solution(s) {
    const eng = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    for (let i = 0; i < eng.length; i++) {
        if (s.indexOf(eng[i]) !== -1) {
            s = s.replaceAll(eng[i], i);
        }; 
    }
    
    return +s;
}

// 입력값 〉 "sixsix6"
// 기댓값 〉 666