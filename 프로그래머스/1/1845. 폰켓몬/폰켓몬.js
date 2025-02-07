function solution(nums) {
    const hash = {};

    for (let i of nums) {
        if (hash[i] > 0) {
            hash[i]++;    
        }
        
        if (!hash[i]) {
            hash[i] = 1;
        }
    }
    
    let 들고갈수있는포켓몬수 = nums.length / 2;
    
    if (들고갈수있는포켓몬수 >= Object.keys(hash).length) return Object.keys(hash).length;
    if (들고갈수있는포켓몬수 < Object.keys(hash).length) return 들고갈수있는포켓몬수;
}


