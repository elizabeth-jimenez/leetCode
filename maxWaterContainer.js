function maxArea(heights) {
    let max = 0, i = 0, j = heights.length - 1;
    
    while(i < j) {
        let area = Math.min(heights[i], heights[j]) * (j - i);
        
        max = Math.max(max, area);

        if(heights[i] < heights[j]) {
            i++;
        } else {
            j--;
        }
    }

    return max;
}

console.log(maxArea([1,7,2,5,4,7,3,6])); // 36
console.log(maxArea([2,2,2])); // 4
