function solution(id_list, report, k) {
    let answer = [];

    // 유저별 신고한 사람을 저장할한다ㅏㅏ.
    let users = {};
    id_list.forEach(id => {
        users[id] = new Set(); 
    });

    // 신고 내역 저장하기.
    report.forEach(v => {
        let [신고한사람, 신고당한사람] = v.split(' ');
        users[신고한사람].add(신고당한사람); 
    });

    // 신고당한 횟수 카운트 객체
    let 퇴출대상 = {};
    id_list.forEach(id => {
        퇴출대상[id] = 0;
    });

    // 각 신고된 유저의 신고 횟수 증가
    for (let key in users) {
        users[key].forEach(신고당한사람 => {
            퇴출대상[신고당한사람]++;
        });
    }

    // 정지된 유저 목록 찾기
    let 정지된유저 = new Set();
    for (let key in 퇴출대상) {
        if (퇴출대상[key] >= k) {
            정지된유저.add(key);
        }
    }

    // 메일 발송 횟수 계산하기
    let 메일결과 = {};
    id_list.forEach(id => {
        메일결과[id] = 0;
    });

    for (let key in users) {
        users[key].forEach(신고당한사람 => {
            if (정지된유저.has(신고당한사람)) {
                메일결과[key]++; // 정지된 유저 신고한 사람에게 메일 발송
            }
        });
    }

    // id_list 순서대로 결과 배열 만들기
    answer = id_list.map(user => 메일결과[user]);

    return answer;
}
