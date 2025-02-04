// 연구실에 있는 N마리 포켓몬 중에서 N/2마리를 가져가도 좋다!
// 포켓몬들은 종류에 따라 번호를 붙여 구분한다. (같은 종류는 같은 번호)
// 나는 최대한 다양한 종류의 포켓몬을 가지길 원한다.
// 최대한 많은 종류의 포켓몬 포함해서 N/2마리 포켓몬을 선택하는 방법 중
// 가장 많은 종류 포켓몬 선택 방법

// 포켓몬 종류 번호의 개수 return 

function solution(nums) {
    let 가져가도되는포켓몬의수 = Math.trunc(nums.length / 2)
    // 고유 값
    console.log('가져가도되는포켓몬의수', 가져가도되는포켓몬의수)
    let unique = [...new Set(nums)].length; 
    
    if (unique > 가져가도되는포켓몬의수) return 가져가도되는포켓몬의수
    if (unique <= 가져가도되는포켓몬의수) return unique
    
} 