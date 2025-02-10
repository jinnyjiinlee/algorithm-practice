function solution(id_list, report, k) {
    let users = {};
    
    // users객체에 아이디와 빈배열 넣기
    id_list.forEach(id => {
        users[id] = [];
    });
    
    // report로 id옆에 신고한 사람 목록 넣기
    report.forEach(arr => {
        arr = arr.split(' ');
        let 신고한사람 = arr[0];
        let 신고당한사람 = arr[1];
        
        // user객체 돌면서 넣기 
        if(!users[신고한사람].includes(신고당한사람)) {
            users[신고한사람].push(신고당한사람) 
        }
    })

    // 각멤버별로 신고당한 횟수 적기
    let 신고당한카운트객체 = {};
    
    id_list.forEach(id => {
        신고당한카운트객체[id] = 0;
    })
    
    let 신고당한리스트 = Object.values(users).flat();
    // 각 개체별 카운트
    
    신고당한리스트.forEach(id => {
        신고당한카운트객체[id]++
    })
    
    let 퇴출대상리스트 = [];
    // 신고당한 카운트객체에서 value값이 k이상인 경우 key값을 퇴출 대상에 넣기
    
    for (let key in 신고당한카운트객체) {
        if(신고당한카운트객체[key] >= k) {
            퇴출대상리스트.push(key)
        }
    }
    
//     users객체에서 values값에 되출대상이 포함되어있는지 확인하고 포함되어있으면 1명당 + 1하고
//     없으면 0
    
    let result = {};
    
    for (let key in users) {
        result[key] = 0;
    }
    
    for (let key in users) {
        // users[key] 의 값에 퇴출대상 리스트가 있으면?
        for (let i = 0; i < users[key].length; i++) {
            if (퇴출대상리스트.includes(users[key][i])) {
                result[key]++
            }   
        }
    }
    
    
    return Object.values(result);
}