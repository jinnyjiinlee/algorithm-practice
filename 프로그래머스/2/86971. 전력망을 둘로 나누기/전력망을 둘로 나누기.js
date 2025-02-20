// 두 전력망이 가지게 되는 송전탑의 개수를 최대한 비슷하ㅣ

// n 송전탑의 개수
// wires 전선 정보

function solution(n, wires) {
    // 하나씩 끊어보자
    let connection = {};
    
    for(let i = 1; i < n; i++) {
        connection[i] = 0;
    }
    
    wires.forEach(arr => {
        for (let key in connection) {
            if (+key === arr[0]) connection[key] ++;
        }
    })
    
    console.log(connection)
    
    
//     let delete = 0;
    
//     for (let i = 0; wires.length; i++) {
//         if (i !== delete) {
//             let left[key] = wires[i] 

//         }
        
//         delete++;
        
//     }
        
}    