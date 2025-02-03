# 보호소에 입양이 몇시에 가장 활발하게 일어나는지 알아보려고 한다.
# 0시부터 23시까지 
# 각 시간대별로 입양건 

SET @hour := -1;
SELECT (@hour := @hour + 1) AS HOUR,
    (SELECT COUNT(*)
    FROM ANIMAL_OUTS
     WHERE HOUR(DATETIME) = @hour) AS COUNT

FROM ANIMAL_OUTS
WHERE @hour < 23;