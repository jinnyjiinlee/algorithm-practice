# Book: 판매중인 도서들의 정보
# BOOK_SALES: 판매 정도 테이블

# 2022년 1월의 카테고리별 도서 판매랑 햡산
# 코테고리, 총판매랑 출력 

SELECT
    CATEGORY
    , SUM(sales ) AS TOTAL_SALES
FROM BOOK B

JOIN BOOK_SALES BS ON B.BOOK_ID = BS.BOOK_ID
WHERE DATE_FORMAT(sales_date, '%Y-%m') = '2022-01'
GROUP BY CATEGORY
ORDER BY CATEGORY