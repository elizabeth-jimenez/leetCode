function canJump(nums) {
    const target = nums.length - 1;
    if(target === 0) {
        return true;
    }
    let remainingSteps = nums[0];
    let i = 1;

    while((remainingSteps > 0) && (i <= target)) {
        remainingSteps--;
        if((remainingSteps + i) >= target){
            return true;
        }
        remainingSteps = Math.max(remainingSteps, nums[i]);
        i++;
    }
    return false;
}

// const input1 = [2,3,1,1,4];
const input2 = [3,2,1,0,4];
// const input3 = [0];
// console.log(canJump(input1)); // true
// console.log(canJump(input2)); // false
console.log(canJump(input2)); // true