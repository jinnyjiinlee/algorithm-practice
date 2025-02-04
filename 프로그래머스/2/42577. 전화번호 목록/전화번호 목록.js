function solution(phone_book) {
    const hash = {};
    
    for (const number of phone_book) {
        hash[number] = true;
    }
    
    for (const number of phone_book) {
        let prefix = '';
       
        for (let i = 0; i < number.length - 1; i++) {
            prefix += number[i]; // 접두사 하나씩 추가
            if(hash[prefix]) {
                return false;
            }
        }
    }
    
    return true;
}