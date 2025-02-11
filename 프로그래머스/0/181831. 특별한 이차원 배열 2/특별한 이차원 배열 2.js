// n * n 크기의 이차원 배열 arr이 매개변수로 주어질 때,
// arr이 다음을 만족하면 1 / 아니라면 0 을 ㄱeturn gofk 
function solution(arr) {
    let count = 0;
    let length = 0;

    for (let i = 0; i < arr.length; i++) {
        length += arr[i].length;

        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === arr[j][i]) count++;
        }
    }
        
    return count === length ? 1 : 0;

}