function solution(order) {
    // 아메리카노: 4500원
    // 카페라테: 5000원
    
    // 메뉴만 적은 분 -> 차가운 것으로 주문
    // 아무거나 -> 차가운 아메리카노로 주문 
    
    // 각 직원이 적은 메뉴가 문자열 배열 order로 주어질 때, 카페에서 결제하게 될 금액 
    
    let result = 0;
    
    order.forEach((v) => {
        if ((v === "iceamericano") || (v === "americanoice")) result += 4500;
        if ((v === "hotamericano") || (v === "americanohot")) result += 4500;
        if ((v === "icecafelatte") || (v === "cafelatteice")) result += 5000;
        if ((v === "hotcafelatte") || (v === "cafelattehot")) result += 5000;
        if (v === "americano") result += 4500;
        if (v === "cafelatte") result += 5000;
        if (v === "anything") result += 4500;
    })
    
    return result;
}