function solution(price, money, count) {
    let payment = 0;
    
    for (let i = 1; i <= count; i++) {
        payment += price * i;
    }
    
    return payment > money ? payment - money : 0;
}