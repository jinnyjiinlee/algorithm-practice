function solution(box, n) {
    // box: 가로, 세로, 높이가 저장되어있는 배열
    // n: 정육면체 주사위 모서리의 길이 정수 
    // 상자에 들어갈 수 있는 주사위의 최대 개수를 return 하기
    
    // 배열 각 요소를 n으로 나눈 세 값의 곱을 구하기
    
    return box.map(e => parseInt(e / n)).reduce((a, b) => a * b);
}