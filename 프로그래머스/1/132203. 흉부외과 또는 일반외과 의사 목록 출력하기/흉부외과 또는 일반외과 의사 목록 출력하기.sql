-- 코드를 입력하세요
# 종합병원에 속한 의사 정보 담은 DOCTOR 테이블
# 의사이름, 의사id, 면허번호, 고용일자, 진료과코드, 전화번호 나타냄


# doctor테이블에서 진료과가 -> 흉부외과(CS) 이거나 일반 외과(GS) -> 의사이름, 의사 id, 진료과, 고용일자 조회하는 sql

# 고용일자 -> 내림차순 정렬
# 고용일자 같다면 -> 이름으로 오름차순 


SELECT DR_NAME, DR_ID, MCDP_CD, DATE_FORMAT(HIRE_YMD, '%Y-%m-%d') 
FROM doctor
WHERE MCDP_CD = 'CS' or MCDP_CD = 'GS'
ORDER BY HIRE_YMD DESC, DR_NAME ASC;