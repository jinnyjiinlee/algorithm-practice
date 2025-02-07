function solution(people, limit) {
    // 내림 차순 정렬
    people.sort((a, b) => b - a);
    
    let left = 0; // 가장 무거운 사람
    let right = people.length - 1; // 가장 가벼운 사람
    let answer = 0;
    
    while (left <= right) { // 투 포인터가 만나기 전까지 반복
        // limit보다 가벼운 사람 + 무거운 사람 더한 것이 작거나 같을 때,
        if (people[left] + people[right] <= limit) {
            right--; // 가벼운 사람 태우기
        }
        left++; // 무거운 사람 태우기
        answer++; // 보트 풀발
    }
    
    return answer;
}