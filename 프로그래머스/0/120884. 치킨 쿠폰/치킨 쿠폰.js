function solution(chicken) {
    let orderCount = 0; // 총 서비스 치킨의 수
    let coupon = chicken; // 초기 쿠폰 수는 주문한 치킨 수와 동일
    
    while (coupon >= 10) { // 쿠폰이 10장 이상일 때 반복
        let serviceChicken = Math.trunc(coupon / 10); // 서비스 치킨 수 계산
        orderCount += serviceChicken; // 서비스 치킨 추가
        coupon = (coupon % 10) + serviceChicken; // 남은 쿠폰 + 서비스 치킨에서 발급된 쿠폰
    }
    
    return orderCount; // 총 치킨 수 return
}