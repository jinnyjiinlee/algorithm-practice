function solution(nums) {
    let 포켓몬 = {};
    
    for (let i = 0; i < nums.length; i++) {
        포켓몬[nums[i]] = 0;
    }
    
    return 포켓몬;
}