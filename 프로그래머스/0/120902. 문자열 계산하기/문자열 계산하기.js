function solution(my_string) {
    const arr = my_string.split(' ');
    let result = 0;
    
    result += +arr[0];
    
    for (let i = 1; i < arr.length; i += 2) {
        // + 라면 바로 뒤에 있는거랑 더하기
        if (arr[i] === '+') {
            result += +arr[i + 1];
        }
        
        // - 라면 바로 뒤에 있는거랑 더하기
        if (arr[i] === '-') {
            result -= +arr[i + 1];
        }   
    }
    return result;
}