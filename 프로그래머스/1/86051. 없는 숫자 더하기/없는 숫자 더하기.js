function solution(numbers) {
    let num = {};
    
    for (let i = 0; i < 10; i++) {
        num[i] = 0;
    }
    
    numbers.forEach(v => {
        for (let key in num) {
            if (v.toString() === key) {
                num[key]++;
            }
        }
    })
    let arr = [];

    for (let key in num) {
        if (num[key] === 0) {
            arr.push(+key)
        }
    }
    
    return arr
            .reduce((a, b) => a + b, 0);
}