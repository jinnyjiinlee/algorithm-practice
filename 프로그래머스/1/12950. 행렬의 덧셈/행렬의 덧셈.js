function solution(arr1, arr2) {
    // 행렬의 덧셈: 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열을 서로 더한 값
    
    // 2개의 행렬 arr1과 arr2의 입력을 받아, 행렬 덧셈의 결과를 반환하는 함수 
    
//     [4, 6]
//     arr1[0][0] + arr2[0][0] = result[0][0]
//     arr1[0][1] + arr2[0][1] = result[0][1]
    
//     arr1[1][0] + arr2[1][0] = result[1][0]
//     arr1[1][1] + arr2[1][1] = result[1][1]
    let result = [];

    
    for (let i = 0; i < arr1.length; i++) {
        result.push([]); 
        for (let j = 0; j < arr1[0].length; j++) {
            result[i].push(arr1[i][j] + arr2[i][j]);
        }
    }

    return result;
}