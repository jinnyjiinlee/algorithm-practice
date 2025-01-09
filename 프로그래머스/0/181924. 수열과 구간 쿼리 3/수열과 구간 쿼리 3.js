function solution(arr, queries) {
    queries.forEach(([a, b], i) => {

        const first = arr[a]; 
        const second = arr[b];

        arr[a] = second;
        arr[b] = first;
        
    })
    return arr;  
}
    
  