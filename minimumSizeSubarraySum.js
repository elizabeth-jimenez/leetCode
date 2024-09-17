longInputFile = require("./longInput");

const longInput = longInputFile.longInputArr;

function minSubArrayLen(target, nums) {
    let leftPane = 0, rightPane = 0, minWindow = Infinity;
    let sum = 0;
    let count = 0;
    let sumRight = true;
    while((leftPane <= rightPane) && (rightPane < nums.length)) {
        if(sumRight) {
            sum += nums[rightPane];
        }

        if(sum >= target){
            minWindow = Math.min(minWindow, (rightPane + 1 - leftPane));
            sum -= nums[leftPane];
            sumRight = false;
            leftPane++;
        } else {
            sumRight = true;
            rightPane++;
        }
        count++;
    }
    return minWindow == Infinity ? 0 : minWindow;
}

const input1 = [2, 3, 1, 2, 4, 3];
const input2 = [1, 4, 4];
const input3 = [1, 1, 1, 1, 1, 1, 1, 1];
const input4 = [3];


console.log(minSubArrayLen(7, input1)); // 2
console.log(minSubArrayLen(4, input2)); // 1
console.log(minSubArrayLen(11, input3)); // 0
console.log(minSubArrayLen(1, input4)); // 1
console.log(minSubArrayLen(396893380, longInput)); // 79517
