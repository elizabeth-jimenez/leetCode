function jump(nums) {
    let jumps = 0;
    let target = nums.length - 1;
    let i = 0;

    if(target === 0) {
        return 0;
    }

    while(i < nums.length) {
        if(i + nums[i] >= target){
            jumps++;
            return jumps;
        }

        let farthestDistance = 0;
        let farthestDistanceI = null;
        for(let j = 1; j <= nums[i]; j++) {
            if((i + nums[j + i] + j) > farthestDistance) {
                farthestDistance = i + nums[j + i] + j;
                farthestDistanceI = i + j;
            }
        }
        jumps++;
        i = farthestDistanceI;
    }

    return jumps;
}

const input1 = [2,3,1,1,6];
const input2 = [2,3,0,1,6, 4, 5, 6];
const input3 = [1,1,1,1,1,1];
const input4 = [0];
console.log(jump(input1)); // 2
console.log(jump(input2)); // 2
console.log(jump(input3)); // 5
console.log(jump(input4)); // 0