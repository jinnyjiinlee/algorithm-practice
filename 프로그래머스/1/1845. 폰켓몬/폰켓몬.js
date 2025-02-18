function solution(nums) {
    let 포켓몬 = {};
    
    // 포켓몬 해시에 초기값 0으로 세팅하기 
    for (let i = 0; i < nums.length; i++) {
        포켓몬[nums[i]] = 0;
    }
    
    for (let number of nums) {
        // 포켓몬 해시값 돌기
        for (let key in 포켓몬) {
            if (Number(key) === number) 포켓몬[key]++; 
        }
    }
    
    let 포켓몬종류 = Object.keys(포켓몬).length;
    let 포켓몬의수 =  Object.values(포켓몬).reduce((a, b) => a + b, 0);
    let 가져가도되는포켓몬수 = 포켓몬의수 / 2;
    
    console.log('포켓몬 종류: ', 포켓몬종류)
    console.log('포켓몬 수: ', 포켓몬의수)
    console.log('가져가도되는포켓몬수: ', 가져가도되는포켓몬수)
    
    // 더 큰게 아니면? 
    return 포켓몬종류 >= 가져가도되는포켓몬수 ? 가져가도되는포켓몬수 : 포켓몬종류;
    

    
}