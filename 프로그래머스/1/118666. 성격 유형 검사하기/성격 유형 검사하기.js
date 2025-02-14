function solution(survey, choices) {
    let result = '';
    let 유형별점수 = {
        'R' : 0,
        'T' : 0,
        'C' : 0,
        'F' : 0,
        'J' : 0,
        'M' : 0,
        'A' : 0,
        'N' : 0
    }
    
    survey.forEach((v, i) => {
        if (choices[i] === 1) 유형별점수[v[0]] += 3;
        if (choices[i] === 2) 유형별점수[v[0]] += 2;
        if (choices[i] === 3) 유형별점수[v[0]] += 1;
        if (choices[i] === 5) 유형별점수[v[1]] += 1;
        if (choices[i] === 6) 유형별점수[v[1]] += 2;
        if (choices[i] === 7) 유형별점수[v[1]] += 3;     
    })
    
    유형별점수['R'] === 유형별점수['T'] ? result += 'R' :
    유형별점수['R'] > 유형별점수['T'] ? result += 'R' : result += 'T'; 
    
    유형별점수['C'] === 유형별점수['F'] ? result += 'C' :
    유형별점수['C'] > 유형별점수['F'] ? result += 'C' : result += 'F';
    
    유형별점수['J'] === 유형별점수['M'] ? result += 'J' :
    유형별점수['J'] > 유형별점수['M'] ? result += 'J' : result += 'M';
    
    유형별점수['A'] === 유형별점수['N'] ? result += 'A' : 
    유형별점수['A'] > 유형별점수['N'] ? result += 'A' : result += 'N';
    
    return result;
}