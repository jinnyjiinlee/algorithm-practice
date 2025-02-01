# 고객의 정보를 담은 MEMBER_PROFILE - 회원 id, 이름, 연락처, 성별, 생년월일 
# 식당 리뷰 정보를 담은 REST_REVIEW - 리뷰 id, 식당 id, 회원 id, 점수, 리뷰, 텍스트, 리뷰 작성일 

# 리뷰를 가장 많이 작성한 회원의 리뷰를 조회 
# 결과? 리뷰 작성일 오름 차순 / 리뷰 텍스트 오름 차순 

SELECT 
    MP.MEMBER_NAME,
    RR.REVIEW_TEXT,
    DATE_FORMAT(RR.REVIEW_DATE, '%Y-%m-%d') AS REVIEW_DATE
FROM MEMBER_PROFILE MP
JOIN REST_REVIEW RR ON MP.MEMBER_ID = RR.MEMBER_ID
WHERE RR.MEMBER_ID = (
    SELECT MEMBER_ID
    FROM REST_REVIEW
    GROUP BY MEMBER_ID
    ORDER BY COUNT(*) DESC
    LIMIT 1
)
ORDER BY 
    RR.REVIEW_DATE ASC,
    RR.REVIEW_TEXT ASC;