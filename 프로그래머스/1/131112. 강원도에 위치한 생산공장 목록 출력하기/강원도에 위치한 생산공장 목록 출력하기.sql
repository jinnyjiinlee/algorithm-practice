-- 코드를 입력하세요

# FOOD_FACTORY: 식품공장의 정보를 담음

# 공장id, 공장이름, 주소, 전화번호 

# 주소 === 강원도에 위치한 
# 공장id(오름차순), 공장이름, 주소 조회

SELECT FACTORY_ID, FACTORY_NAME, ADDRESS FROM FOOD_FACTORY
WHERE ADDRESS LIKE '강원도%'
ORDER BY FACTORY_ID;