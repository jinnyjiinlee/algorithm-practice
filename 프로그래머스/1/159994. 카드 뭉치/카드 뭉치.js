function solution(cards1, cards2, goal) {
    let arr = [...goal];
    
    goal.forEach((v) => {
        if (v === cards1[0]) {
            cards1.shift();
            arr.shift();
        } else if (v === cards2[0]) {
            cards2.shift();
            arr.shift();
        } 
    });
     
    return arr.length === 0 ? "Yes" : "No";
}