function solution(rank, attendance) {
    // rank: 각 학생들의 선발 고사 등수를 담은 정수 배열
    // sttendacne: 전국대회 참여 여부 
    // 선발된 학생들 등수가 높은 순서대로 a, b, c
    
    // rank 중 참석 가능한 학생 추리기
    const a = [];
    
    attendance.forEach((v, i) => {
        if(v === true) a.push(rank[i]);
    })
    const b = a.sort((a, b) => a - b);

    return  rank.findIndex(v => v === b[0]) * 10000 + rank.findIndex(v => v === b[1]) * 100 + rank.findIndex(v => v === b[2]);        
}