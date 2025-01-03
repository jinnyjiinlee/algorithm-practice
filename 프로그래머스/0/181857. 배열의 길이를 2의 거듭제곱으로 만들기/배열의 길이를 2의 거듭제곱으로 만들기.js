function solution(arr) {
    let i = 0;
    while(arr.length > 2 ** i) i++;
    return [...arr, ...new Array(2 ** i - arr.length).fill(0)];
}