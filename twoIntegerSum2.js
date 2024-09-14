function twoSum(numbers, target) {
    for(let i = 0; i < numbers.length - 1; i++) {
        for(let j = i + 1; j < numbers.length; j++) {
            if(numbers[i] + numbers[j] === target) {
                return [i + 1, j + 1];
            }
        }
    }
}

console.log(twoSum([1,2,3,4], 3)); // [1,2]