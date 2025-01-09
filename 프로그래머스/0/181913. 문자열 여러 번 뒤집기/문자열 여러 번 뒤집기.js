function solution(my_string, queries) {
    let str = '';
    let result = '';
    
    str = my_string;
    
    for (let [a, b] of queries) {
        result = '';
        result += str.slice(0, a);
        result += str.split('').slice(a, b + 1).reverse().join('');
        result += str.slice(b + 1);
        str = result;
    }

    return result;
}