function solution(my_string, s, e) {
    let result = [];
    
    result += ([...my_string].slice(0, s));
    result += ([...my_string].slice(s, e + 1).reverse());
    result += ([...my_string].slice(e + 1));
                
    return result.split(',').join('');
}