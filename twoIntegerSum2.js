function twoSum(numbers, target) {
    for(let i = 0; i < numbers.length - 1; i++) {
        for(let j = i + 1; j < numbers.length; j++) {
            const sum = numbers[i] + numbers[j];
            if(sum > target) {
                j = numbers.length;
            }
            if(sum === target) {
                return [i + 1, j + 1];
            }
        }
    }
}

console.log(twoSum([1,2,3,4,8,9,10,13], 7)); // [3,4]
console.log(twoSum([1,2,3,4], 3)); // [1,2]