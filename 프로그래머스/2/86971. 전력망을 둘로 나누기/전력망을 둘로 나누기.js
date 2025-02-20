function countNodes(graph, start, visited) {
    let stack = [start];
    let count = 0;

    while (stack.length > 0) {
        let node = stack.pop();
        if (visited[node] === false) {
            visited[node] = true;
            count++;
            stack = stack.concat(graph[node]); // 연결된 송전탑을 스택에 추가
        }
    }

    return count;
}

function solution(n, wires) {
    let minDiff = n; // 최대값으로 초기화

    for (let i = 0; i < wires.length; i++) {
        // 1. 그래프 만들기 (전선 하나 제거)
        let graph = [];
        for (let j = 0; j <= n; j++) {
            graph[j] = [];
        }

        for (let j = 0; j < wires.length; j++) {
            if (i !== j) { // 현재 끊는 전선 제외
                let a = wires[j][0];
                let b = wires[j][1];
                graph[a].push(b);
                graph[b].push(a);
            }
        }

        // 2. 한쪽 네트워크 개수 구하기
        let visited = new Array(n + 1).fill(false); // 방문 체크 배열
        let leftSize = countNodes(graph, wires[i][0], visited); // 첫 번째 송전탑에서 시작

        // 3. 두 네트워크 개수 차이 계산
        let rightSize = n - leftSize;
        let diff = Math.abs(leftSize - rightSize);

        minDiff = Math.min(minDiff, diff); // 최소값 갱신
    }

    return minDiff;
}
