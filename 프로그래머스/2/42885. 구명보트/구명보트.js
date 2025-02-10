function solution(people, limit) {
    // 구명보트 작아서 한 번에 최대 2명 탈 수 있다. 
    let count = 0;
    people = people.sort((a, b) => b - a);
    
    let heavy = 0; // 가장 뚱뚱
    let skinny = people.length - 1  // 가장 날씬
    
    while(heavy <= skinny) { // 
        if (people[heavy] + people[skinny] <= limit) {
            skinny--; // 그 당시 가장 가벼운 사람 
        }
        heavy++; // 무거운 사람 태우기
        count++; //보트 이동 
    }
    
    return count;
}