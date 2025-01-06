function solution(date1, date2) {
    // date1, date2: 정수 배열
    // date1 date2보다 앞서는 날짜라면 -> 1
    // date1 date2보다 앞서는 날짜가 아니면 -> 0
    
    // 앞서는 날짜인지 확인 해야된다.
    
    // 년
    if (date1[0] < date2[0]) return 1
    if (date1[0] > date2[0]) return 0
    
    // 월
    if (date1[1] < date2[1]) return 1
    if (date1[1] > date2[1]) return 0
    
    // 일 
    if (date1[2] < date2[2]) return 1
    if (date1[2] > date2[2]) return 0
    
    if (date1[2] === date2[2]) return 0
}