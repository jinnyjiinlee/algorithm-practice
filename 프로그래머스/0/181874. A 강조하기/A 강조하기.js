function solution(myString) {
    return myString.split('').map(e => {
        if ((e !== 'A' ) && (e.toUpperCase() === e)) {
            return e.toLowerCase();
        } else if (e === 'a') {
            return 'A';
        } else {
            return e;
        };
    }).join('')
}