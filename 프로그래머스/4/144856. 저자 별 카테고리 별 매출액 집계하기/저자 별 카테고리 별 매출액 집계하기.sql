# BOOK: 도서들의 도서 정보
# - 북Id, 카테고리, 저자아이디, 가격, 출판일
# AUTHOR: 저자 정보 
# - 저자 id, 저자명
# BOOK_SALES: 
# - 도서 id, 판매일, 판매량

# 2022년 1월의 도서 판매 데이터를 기준으로 
# 저자별, 카테고리 별 매출액을 구하여 

# 저자id, 저자명, 카테고리, 매출액 리스트를 출력하는 SQL문을 작성


SELECT 
    B.AUTHOR_ID
    , AUTHOR_NAME
    , CATEGORY
    , SUM(SALES * PRICE) AS TOTAL_SALES

FROM BOOK B

JOIN AUTHOR A ON B.AUTHOR_ID = A.AUTHOR_ID

JOIN BOOK_SALES BS ON B.BOOK_ID = BS.BOOK_ID

WHERE DATE_FORMAT(SALES_DATE, '%Y-%m') = '2022-01'

GROUP BY author_name, category
ORDER BY AUTHOR_ID, CATEGORY DESC