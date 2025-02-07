function solution(participant, completion) {
    let hash = {}
    
    // hash테이블에 참여자들 이름 만들기 
    for (let i of participant) {
        hash[i] = 0;
    }
    
    // hash테이블에 참여자들 이름과 숫자 1 넣기
    for (let i of participant) {
        hash[i] += 1;
    }
    
    // 완주한 사람들에게는 숫자 -1 하기
    for (let i of completion) {
        if (hash[i] > 0) hash[i]--;    
    }
    
    for (let k in hash) {
        if (hash[k] > 0) return k; 
    }
}
