function solution(my_strings, parts) {
    // my_strings: 길이가 같은 문자열 배열 
    // parts: 2차원 배열 정수 
    
    // 첫 번재 요소 기준
    
    // my_string에서 part 첫 번째 배열부터 4번째 까지 자른다. 
        // 무엇으로 자르나? 문자열도 바로 자를 수 있는지 확인하기 
 
    // result에 push 한다.
    
    return my_strings.map((v, i) => v.substring(parts[i][0], parts[i][1] + 1)).join('');
   
}