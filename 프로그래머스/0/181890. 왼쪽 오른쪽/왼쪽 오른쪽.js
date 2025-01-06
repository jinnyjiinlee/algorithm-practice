// function solution(str_list) {
    
//     for (let i = 0; str_list.length; i++) {
//         if (str_list[i] === 'l') {
//             return str_list.slice(0, i);
//         }
//         if (str_list[i] === 'r') {
//             return str_list.slice(i + 1);
//         }
//     }
//     return [];
// }

function solution(str_list) {
    const index = str_list.findIndex(char => char === 'l' || char === 'r');
    if (index === -1) return [];
    return str_list[index] === 'l' ? str_list.slice(0, index) : str_list.slice(index + 1);
}
