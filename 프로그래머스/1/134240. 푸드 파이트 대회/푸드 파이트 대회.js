function solution(food) {
    let result = [];
    
    food.forEach((v, i) => {
        if (v >= 2) {
            const a = Math.trunc(v / 2);
            for (let b = 0; b < a; b++) {
                result.push(i);
            }
        }
    })
    
    return result.join('') + 0 + result.reverse().join('');
}