function solution(brown, yellow) {
    let area = brown + yellow;
    
    // 카펫의 최소 높이는 3부터이다.
    for (let height = 3; height <= brown; height++) {
        // 임의의 높이를 나눌 때 나머지가 없을 경우에만
        if (area % height === 0) {
            let weight = area / height;
            
            // 테두리를 제외한 길이를 구해야하기 때문에에 각각 -2해준 뒤 곱셈
            if ( (height - 2) * (weight - 2) === yellow) {
                return [weight, height]
            }
        }
    }
}