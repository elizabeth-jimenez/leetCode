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

function twoSumNotBruteF(numbers, target) {
    let lP = 0;
    let rP = numbers.length - 1;

    while(lP < rP) {
        const sum = numbers[lP] + numbers[rP];

        if(sum === target) {
            return [lP + 1, rP + 1];
        }

        if(sum > target) {
            rP--;
        }
        if(sum < target) {
            lP++;
        }
    }
}

console.log(twoSumNotBruteF([1,2,3,4,8,9,10,13], 7)); // [3,4]
console.log(twoSumNotBruteF([1,2,3,4], 3)); // [1,2]