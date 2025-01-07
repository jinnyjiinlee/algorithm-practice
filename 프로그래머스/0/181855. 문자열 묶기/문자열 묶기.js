function solution(strArr) {
    let arr = new Array(30).fill(0);

    strArr.forEach(v => {
        for (let i = 1; i <=30; i++) {
            if (v.length === i) arr[i - 1] += 1;
        }
    })
    
    return Math.max(...arr);
}