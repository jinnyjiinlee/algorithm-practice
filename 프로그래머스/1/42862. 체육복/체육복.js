function solution(n, lost, reserve) {
    let answer = 0;
    let students = {};
    
    for (let i = 1; i <= n; i++) {
        students[i] = 1;
    }
    
    // 잃어버린 학생들 처리
    lost.forEach(v => students[v] -= 1);
    
    // 여러 학생들 처리
    reserve.forEach(v => students[v] += 1);
    
    // students학생들 조회 
    for (let i = 1; i <= n; i++) {
        // 내가 2개 있고 앞 사람 없으면 빌려주기
         if ((students[i] === 2) && students[i - 1] === 0) {
             students[i - 1] += 1;
             students[i] -= 1;
         }
        
        // 내가 2개 있고 뒷 사람 없으면 빌려주기 
         if ((students[i] === 2) && students[i + 1] === 0) {
             students[i + 1] += 1;
             students[i] -= 1;
         }
    }
    
    for (let key in students) {
        if (students[key] >= 1) {
            answer++;
        }
    }
    
    return answer;
}