function solution(phone_number) {
    return '*'.repeat(phone_number.length - 4) + 
        phone_number.split('').reverse().slice(0, 4).reverse().join('');
}