

function solution(array, n) {
    let number = {};
    
    for (let i = 0; i < array.length; i++) {
        number[array[i]] = 0;
    }
    
    for (let key in number) {
        let a = Number(key) - n;  
        let b = n - Number(key);
        
        number[key] = Math.min(Math.abs(a), Math.abs(b))
    }
    
    return +Object.keys(number).find(key => number[key] === Math.min(...Object.values(number)))
}