function solution(arr) {
    if (arr.length === arr[0].length) return arr;
    
    if (arr.length > arr[0].length) {
        const plus = arr.length - arr[0].length;

        for (let i = 0; i < plus; i++) {
            for (let l = 0; l < arr.length; l++) {
                arr[l].push(0);
            } 
        }    
        return arr;
    }
    
    if (arr.length < arr[0].length) {
        const plus = arr[0].length - arr.length;
        
        for (let i = 1; i <= plus; i++) {
            const zeroCount = [];
            
            for (let i = 1; i <= arr[0].length; i++) {
                zeroCount.push(0)    
            }
            arr.push(zeroCount);
        }
        return arr;
    }
}