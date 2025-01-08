function solution(board, k) {
    // board: 2차원 정수 배열
    // k: 정수 
    
    // i + j <= k를 만족하는 (i, j)에 대한 board[i][j]의 합을 return 하는 solution함수를 완성
    
    let result = 0;
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (i + j <= k) result += board[i][j]; 
        }
    }
    
    return result;
}