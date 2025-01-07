function solution(my_string, indices) {
    // my_string: 문자열
    // indices: 정수 배열 
    
    // my_string에서 indices의 원소에 해당하는 인덱스 글자를 지우고 이어 붙은 문자열 return 
    
    const arr = [...my_string]
    indices.sort((a, b) => b - a);
    
    for (let i of indices) {
        arr.splice(i, 1);
    }
    
    return arr.join('');
}