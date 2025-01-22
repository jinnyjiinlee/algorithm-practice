-- 코드를 입력하세요

# CAR_ID: 자동차 id
# CAR_TYPE: 자동차 종류
# DAILY_FEE: 일일 대여 요금
# OPTIONS: 자동차 옵션 리스트 

# 자동차 종류: 세단, SUV, 승합차, 트럭, 리무진
# 자동차 옵션 리스트:  '주차감지센서', '스마트키', '네비게이션', '통풍시트', '열선시트', '후방카메라', '가죽시트' 
# (콤마로 구분)

# CAR_TYPE(자동차 종류)가 'SUV'인 -> 자동차들의 평균 일일 대여 요금(DAILY_FEE)을 출력 
# 평균 일일 대여 요금: 소수 첫 번째 자리에서 반올림하고 
# 컬럼명은 AVERAGE_FEE

SELECT ROUND(AVG(daily_fee))
FROM CAR_RENTAL_COMPANY_CAR 
WHERE car_type = 'SUV';

