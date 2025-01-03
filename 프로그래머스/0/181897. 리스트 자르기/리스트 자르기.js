function solution(n, slicer, num_list) {
    // n: 정수
    // slicer: 정수 3개가 담긴 리스트 
    // num_list: 정수 여러개가 담긴 리스트
    
    const a = slicer[0];
    const b = slicer[1];
    const c = slicer[2];
    
    let result = [];
             
    if (n === 1) {
        return num_list.slice(0, b + 1);
    }
    
    if (n === 2) {
        return num_list.slice(a);
    }
    
    if (n === 3) {
        return num_list.slice(a, b + 1);
    }
    
    if (n === 4) {
        const arr = num_list.slice(a, b + 1);
        for (let i = 0; i < arr.length; i += c) {
            result.push(arr[i]);
        }
    }
    
    return result;
}