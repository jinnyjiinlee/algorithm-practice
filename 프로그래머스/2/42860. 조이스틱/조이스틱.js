function solution(name) {
    let 전체알파벳 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    // Up/Down 이동 횟수를 저장할 변수
    let count = 0;
    
    // 배열로 만들기 
    let arr = name.split('');

    // 1) 모든 문자를 확인하여 수직 이동 더하기
    for (let i = 0; i < arr.length; i++) {
        let alp = arr[i];
        
        if (alp !== 'A') {
            // Up/Down 최소 이동 계산
            let position = 전체알파벳.indexOf(alp);     
            if (position > 13) {
                position = 26 - position;
            }
            count += position;
        }
    }
    
    // 2) 좌/우 이동 
    //    - 기본적으로 오른쪽으로 (name.length - 1)만큼 이동한다고 가정
    //    - 연속된 'A'를 만나면 뒤로 돌아가는 게 이득일 수 있으므로 이를 고려
    let horizontalMove = name.length - 1; 
    let length = name.length;

    for (let i = 0; i < length; i++) {
        let idx = i + 1;
        // 다음 문자부터 연속된 'A'를 건너뛸 수 있는지 확인
        while (idx < length && arr[idx] === 'A') {
            idx++;
        }
        // case1) 오른쪽으로 i번, 왼쪽으로 (length - idx)번
        // case2) 왼쪽으로 (length - idx)번, 다시 오른쪽으로 i번
        horizontalMove = Math.min(
            horizontalMove,
            i * 2 + (length - idx), 
            (length - idx) * 2 + i
        );
    }

    // 3) 최종 조이스틱 이동 횟수 = 수직 이동(count) + 수평 이동(horizontalMove)
    return count + horizontalMove;
}
