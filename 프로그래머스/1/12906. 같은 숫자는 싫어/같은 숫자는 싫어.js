function solution(arr) {
    let result = [];
    
    result.push(arr[0]);
    arr.shift();
    
    for (let i = 0; i < arr.length; i++) {    
        if (result[result.length - 1] !== arr[i]) {
            result.push(arr[i]);
        }
    }
     
    return result;
}