function solution(my_string) {
    // 어떤 문자열에 대해서 접미사: 특정 인덱스부터 시작하는 문자열
    // my_string: 문자열
    // my_string의 모든 접미사를 사전순으로 정렬한 문자열 배열 return 
    
    let result = [];
    
    for (let i = 0; i < my_string.length; i++) {
        result.push(my_string.slice(my_string.length - 1 - i))
    }
    
    return result.sort();
}