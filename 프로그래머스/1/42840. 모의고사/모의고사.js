function solution(answers) {
    let answer = [];
    
    let oneAns = [1, 2, 3, 4, 5];
    let twoAns = [2, 1, 2, 3, 2, 4, 2, 5];
    let threeAns = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let count = [0, 0, 0];
    
    answers.forEach((v, i) => {
        let index = i % oneAns.length;
        if (v === oneAns[index]) count[0]++;
        
        
        index = i % twoAns.length;
        if (v === twoAns[index]) count[1]++;
        
        index = i % threeAns.length;
        if (v === threeAns[index]) count[2]++;
        threeAns[index]
    })
    
    let max = Math.max(...count);
    
    if (count[0] === max) answer.push(1);
    if (count[1] === max) answer.push(2);
    if (count[2] === max) answer.push(3);
    
    return answer;
}