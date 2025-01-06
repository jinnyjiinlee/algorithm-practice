function solution(before, after) {
    // before, after: 문자열
    // before의 순서를 바꾸어 after 만들 수 있으면 -> 1  
    // 없으면 -> 0
    console.log([...before].sort())
    console.log([...after].sort())
    
    return [...before].sort().join('') === [...after].sort().join('') ? 1 : 0;
}