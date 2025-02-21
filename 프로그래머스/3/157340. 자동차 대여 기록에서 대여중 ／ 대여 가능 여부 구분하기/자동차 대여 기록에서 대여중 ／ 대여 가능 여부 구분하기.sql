SELECT 
    CAR_ID
    , MAX(CASE
        WHEN DATE_FORMAT(END_DATE, '%Y-%m-%d') < '2022-10-16' THEN '대여 가능'
        WHEN DATE_FORMAT(START_DATE, '%Y-%m-%d') > '2022-10-16' THEN '대여 가능'
        ELSE '대여중'
    END) AS AVAILABILITY
FROM 
    CAR_RENTAL_COMPANY_RENTAL_HISTORY
    
GROUP BY CAR_ID
ORDER BY CAR_ID DESC


