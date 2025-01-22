-- 코드를 입력하세요

# 출하번호, 맛, 총 주문량 

# 상반기에 판매된 아이스크림 맛을 -> 총 주문량을 기준으로 내림차순 정렬
# (주문량 같다면 -> 출하 번호 기준 오름 차순 )


SELECT FLAVOR FROM FIRST_HALF
ORDER BY TOTAL_ORDER DESC, SHIPMENT_ID ASC