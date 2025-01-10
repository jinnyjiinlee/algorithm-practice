function solution(s) {
    // 문자열 s에는 공백으로 이루어 구본된 숫자들이 저장
    // str에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 최소값, 최대값 형태로 나누기
    let result = [];
    result.push(Math.min.apply(null, s.split(' ').map(Number)))
    result.push(Math.max.apply(null, s.split(' ').map(Number)))

    return result.join(' ');
}