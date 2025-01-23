-- 코드를 입력하세요

# 아이스크림 가게 상반기 주문 정보 FIRST_HALF 테이블

# SHIPMENT_ID, FLAVOR, TOTAL_ORDER 
# 출하 번호, 아이스크림 맛, 상반기 아이스크림 총주문량


# 아이스크림 성분에 대한 정보 ICECREAM_INFO 테이블

# SHIPMENT_ID, FLAVOR, TOTAL_ORDER 
# 출하 번호, 아이스크림 맛, 상반기 아이스크림 총주문량


# 상반기 아이스크림 총 주문량이 3,000보다 높으며서 
# 아이스크림 주 성분이 과일인 아이스크림 맛을 총 주문량이 큰 순서대로 조회하는 SQL문 


# 주 성분이 과일인 아이스크림의 맛을 총 주문량이 큰 순서대로 조회하는

SELECT F.FLAVOR
FROM FIRST_HALF F 
JOIN ICECREAM_INFO I ON F.FLAVOR = I.FLAVOR
WHERE F.TOTAL_ORDER > 3000
    AND I.INGREDIENT_TYPE = 'fruit_based'
ORDER BY F.TOTAL_ORDER DESC    