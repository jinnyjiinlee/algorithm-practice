function solution(id_pw, db) {
    // 프로그래머스 로그인 하려고 함
    // id_pw: 머쓱이가 입력한 아이디와 패스워드
    // db: 회원들의 정보가 담긴 2차원 배열 db 
    
    // 로그인 성공,실패에 따른 메시지 return
    // 아이디어, 비밀번호 모두 일치 하면 return "logn"
    // 로그인 실패 -> 아이디 일치 없음 -> return "fail"
    // 로그인 실패 -> 아이디는 일치, 비밀번호 일치 없음 -> return 'wrong pw'
    
    // 먼저 입력한 아이디: id_pw[0] 비밀번호: id_pw[0] 가 모두 일치하는 db 있는지 확인한다. 
    
    for (let v of db) {
        if ((id_pw[0] === v[0]) && (id_pw[1]  === v[1])) return 'login';
        if ((id_pw[0] === v[0]) && (id_pw[1]  !== v[1])) return 'wrong pw'; 
    }
    return 'fail';
}