-- 코드를 입력하세요

# ANIMAL_INS 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블

# 동물의 아이디, 생물 종, 보호 시작일, 보호 시작 시 상태, 이름, 성별, 및 중성화 여부


# 보호소에 들어온 모든 동물의 정보 ANIMAL_ID순으로 조회 하는 

SELECT ANIMAL_ID, ANIMAL_TYPE, DATETIME, INTAKE_CONDITION, NAME, SEX_UPON_INTAKE 
FROM ANIMAL_INS
ORDER BY ANIMAL_ID

