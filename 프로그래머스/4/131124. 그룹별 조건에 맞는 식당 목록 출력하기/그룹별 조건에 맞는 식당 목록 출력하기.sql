# MEMBER_PROFILE : 고객의 정보를 담은 
# REST_REVIEW: 식당 리뷰 정보를 담은 
# -- 코드를 입력하세요
# 테이블에서 리뷰를 가장 많이 작성한 회원의 리뷰를 조회하는 SQL문 
# 결과: 리뷰 작성일 기준으로 오름차순: 리뷰 작성일이 같다면 리뷰 텍스트 기준으로 오름차순

SELECT 
    MEMBER_NAME
    , REVIEW_TEXT
    , DATE_FORMAT(REVIEW_DATE, '%Y-%m-%d') AS REVIEW_DATE

FROM REST_REVIEW R

JOIN MEMBER_PROFILE M ON R.MEMBER_ID = M.MEMBER_ID

WHERE R.MEMBER_ID = (SELECT 
                        MEMBER_ID 
                     FROM 
                        REST_REVIEW
                    GROUP BY MEMBER_ID
                    ORDER BY COUNT(*) DESC LIMIT 1)
                    
ORDER BY REVIEW_DATE, REVIEW_TEXT