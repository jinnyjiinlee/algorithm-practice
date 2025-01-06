function solution(n_str) {
    // n_str: 정수로 이루어진 문자열
    // n_str의 가장 왼쪽에 처음으로 등장하는 0들을 뗀 문자열 return 
    
    // 풀이법: 배열로 바꾼 후 첫 요소에 0이 있으면 제거한다.
    
    const arr = [...n_str];

    while (arr[0] === '0') {
        arr.shift();                
    }

    return arr.join('')
}