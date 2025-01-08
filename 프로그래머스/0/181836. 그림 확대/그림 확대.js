function solution(picture, k) {
    let result = [];
    
    picture.forEach(v => {
        const arr = v.split('')
        let oneArr = [];

        for (let i = 0; i < arr.length; i++) {    
            if (arr[i] === '.') {
                oneArr += '.'.repeat(k);
            }
            if (arr[i] === 'x') {
                oneArr += 'x'.repeat(k);
            }
        }
        for (let i = 0; i < k; i++) {
            result.push(oneArr);
        }
    });
    return result;
}