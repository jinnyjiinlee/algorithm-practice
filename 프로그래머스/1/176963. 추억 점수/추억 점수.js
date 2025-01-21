function solution(name, yearning, photo) {
    let result = [];
    
    photo.forEach(v => {
        let score = 0;
        
        v.forEach((w, i) => {
            let index = name.indexOf(w);
            if (index !== -1) score += yearning[index];
        });

        result.push(score);
    });
    
    return result;
}