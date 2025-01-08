function solution(myString, pat) {
    // myStrign: 문자열
    // pat: 문자열
    
    let result = 0;
        
    for (let i = 0; i < myString.length; i++) {
        if (myString.slice(i, pat.length + i) === pat) result += 1;
    }
    
    return result;
}