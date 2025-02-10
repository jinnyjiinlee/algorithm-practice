

function solution(sizes) {
    for (let i = 0; i < sizes.length; i++) {
        sizes[i].sort((a, b) => b - a);
    }
    
    let 가로 = [];
    let 세로 = [];
    
    sizes.forEach(arr => {
        가로.push(arr[0]);
        세로.push(arr[1]);
    })
    
    let a = Math.max(...가로)
    let b = Math.max(...세로)
    
    return a * b;
}