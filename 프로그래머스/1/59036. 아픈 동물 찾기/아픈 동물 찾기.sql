-- 코드를 입력하세요
# ANIMAL_INT
# 동물 아이디, 생물 종, 보호 시작일, 보호 시작시 상태, 이름, 성별, 중성화 여부

SELECT ANIMAL_ID, NAME FROM ANIMAL_INS
WHERE INTAKE_CONDITION = 'Sick'
ORDER BY ANIMAL_ID
