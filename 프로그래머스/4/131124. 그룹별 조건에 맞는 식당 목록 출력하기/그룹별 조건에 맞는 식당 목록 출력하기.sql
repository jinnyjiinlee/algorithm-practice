SELECT
    MP.MEMBER_NAME            
    , REVIEW_TEXT
    , DATE_FORMAT(REVIEW_DATE, '%Y-%m-%d') AS REVIEW_DATE
FROM REST_REVIEW RV

JOIN MEMBER_PROFILE MP ON MP.MEMBER_ID = RV.MEMBER_ID

WHERE MP.MEMBER_ID = (SELECT 
                            MEMBER_ID
                        FROM 
                            REST_REVIEW
                        GROUP BY MEMBER_ID
                        ORDER BY COUNT(*) DESC LIMIT 1)


ORDER BY REVIEW_DATE, REVIEW_TEXT;

