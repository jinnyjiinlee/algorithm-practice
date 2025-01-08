function solution(arr) {    
    let newArr = arr.map(v => v);
    
    for (let i = 0; i < 1000000; i++) {
        let a = newArr.map((v) => v);
        newArr.forEach((v, ind) => {
            if ((v >= 50) && (v % 2 === 0)) newArr[ind] = v / 2;
            else if ((v < 50) && (v % 2 === 1)) newArr[ind] = (v * 2) + 1;
            else newArr[ind] = v;
        })
        let b = newArr.map(v => v);

        if (a.join('') === b.join('')) return i;
    }
}

