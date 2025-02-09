function solution(my_string, alp) {
    return my_string.split('').map(v => {
        if (v === alp) {
            return v.toUpperCase();
        }
        return v
    }).join('')
}