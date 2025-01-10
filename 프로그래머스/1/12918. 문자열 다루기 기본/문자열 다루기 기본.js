function solution(s) {
    const arr = s.split('');
    const onlyNumber = arr.map(Number).filter(v => v === v);

    return (arr.join('') === onlyNumber.join('')) && ((s.length === 4) || (s.length === 6)) ? true : false;  
}