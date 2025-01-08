function solution(myString, pat) {
    return myString.toUpperCase().includes(pat.toUpperCase()) === true ? 1 : 0;
}