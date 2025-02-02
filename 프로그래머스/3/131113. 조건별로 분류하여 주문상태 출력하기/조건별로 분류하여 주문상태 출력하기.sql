# 주문 id, 제품 id, 주문양, 
# 생산일자, 입고일자, 출고일자,
# 공장id, 창고id

# 출고여부: 2022년 5월 1일까지 출고완료
# 이후 날짜: 출고대기로 미정 -> 출고 미정 출력

SELECT 
    ORDER_ID,
    PRODUCT_ID,
    DATE_FORMAT(OUT_DATE, '%Y-%m-%d') AS OUT_DATE,
    CASE 
        WHEN DATE(OUT_DATE) <= '2022-05-01' THEN '출고완료'
        WHEN DATE(OUT_DATE) > '2022-05-01' THEN '출고대기'
        ELSE '출고미정'
    END 
    AS '출고여부'
FROM FOOD_ORDER
ORDER BY ORDER_ID;
