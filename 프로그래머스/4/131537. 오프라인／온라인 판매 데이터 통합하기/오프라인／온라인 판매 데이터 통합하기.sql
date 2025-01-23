SELECT 
    DATE_FORMAT(N.SALES_DATE, '%Y-%m-%d') AS SALES_DATE,
    N.PRODUCT_ID,
    N.USER_ID,
    N.SALES_AMOUNT
FROM ONLINE_SALE N
WHERE YEAR(N.SALES_DATE) = 2022
  AND MONTH(N.SALES_DATE) = 3

UNION ALL

SELECT 
    DATE_FORMAT(N.SALES_DATE, '%Y-%m-%d') AS SALES_DATE,
    N.PRODUCT_ID,
    NULL AS USER_ID,
    N.SALES_AMOUNT
FROM OFFLINE_SALE N
WHERE YEAR(N.SALES_DATE) = 2022
  AND MONTH(N.SALES_DATE) = 3

ORDER BY SALES_DATE, PRODUCT_ID, USER_ID;
