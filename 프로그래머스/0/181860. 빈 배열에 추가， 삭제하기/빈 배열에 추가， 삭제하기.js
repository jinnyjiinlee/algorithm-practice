function solution(arr, flag) {
    // 아무 원소도 들어있지 않은 빈 배열X
    // 길이가 같은 정수 배열 arr와 boolean 배열 flag 가 매게 변수 
    // flag를 각 차례대로 순회하며 flag[i]가 true 라면 X
    
    let X = [];
    
    // 만약에 flag 요소가 true 라면?   
    for (let i = 0; i < arr.length; i++) {
        if (flag[i]) {
            // a[i] * 2번만큼 추가
            for (let j = 0; j < arr[i] * 2; j++) X.push(arr[i])
            // flag 요소가 false라면?
        } else {
            for (let j = 0; j < arr[i]; j++) {
                X.pop();
            }
        }
    }
    return X;    
}