function solution(cards1, cards2, goal) {
    
    let arr = [...goal];
    
    goal.forEach((v) => {
        console.log('v', v)
        if (v === cards1[0]) {
            cards1.splice(0, 1);
            arr.splice(0, 1);
            console.log('1', arr)
        } else if (v === cards2[0]) {
            cards2.splice(0, 1);
            arr.splice(0, 1);
            console.log('2', arr)
        } 
    });
     
    return (arr.length === 0) ? "Yes" : "No";
}