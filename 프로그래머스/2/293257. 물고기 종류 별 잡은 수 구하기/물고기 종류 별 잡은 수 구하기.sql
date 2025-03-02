SELECT 
    COUNT(*) AS FISH_COUNT,
    FISH_NAME 
FROM FISH_INFO I
JOIN FISH_NAME_INFO N ON I.FISH_TYPE = N.FISH_TYPE
GROUP BY FISH_NAME
HAVING COUNT(*)
ORDER BY COUNT(*) DESC;