function solution(spell, dic) {

    let count = 0;
    
    dic.forEach(v => {
        if (v.split('').sort().join('') === spell.sort().join('')) count += 1;
    })
    
    return count >= 1 ? 1 : 2;
}