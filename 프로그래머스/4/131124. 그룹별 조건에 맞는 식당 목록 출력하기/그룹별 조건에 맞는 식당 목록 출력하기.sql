# MEMBER_PROFILE: 고객의 정보를 담은 테이블
# - 회원 id, 이름, 연락처, 성별, 생년월일

# REST_REVIEW: 식당 리뷰 담은 테이블 
# - 리뷰id, 식당id, 회원id, 점슈, 텍스ㅡ ,작성일 

# 리뷰를 가장 많이 작성한 ㅇ회원 


SELECT 
    MP.MEMBER_NAME 
    , REVIEW_TEXT
    , DATE_FORMAT(REVIEW_DATE, '%Y-%m-%d') AS REVIEW_DATE

    # , COUNT(*) 
FROM REST_REVIEW RV

JOIN MEMBER_PROFILE MP ON MP.MEMBER_ID = RV.MEMBER_ID

WHERE MP.MEMBER_ID = (
    SELECT 
        MEMBER_ID 
    FROM 
        REST_REVIEW
    GROUP BY MEMBER_ID
    ORDER BY COUNT(*) DESC
    LIMIT 1
)

ORDER BY REVIEW_DATE, REVIEW_TEXT
