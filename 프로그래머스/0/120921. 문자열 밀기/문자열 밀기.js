function solution(A, B) {
    if (A === B) return 0; // A와 B가 처음부터 같으면 0 반환

    let rotated = A; // 회전할 문자열 초기화
    for (let count = 1; count <= A.length; count++) {
        // 문자열을 오른쪽으로 한 칸씩 밀기
        rotated = rotated.slice(-1) + rotated.slice(0, -1);
        if (rotated === B) return count; // 밀어서 B와 같으면 횟수 반환
    }

    return -1; // 어떤 경우에도 B가 되지 않으면 -1 반환
}
