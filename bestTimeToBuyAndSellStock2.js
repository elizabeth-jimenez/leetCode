function maxProfit2(prices) {
    let buyPrice = prices[0];
    let currentMaxProfit = 0;
    let totalProfit = 0;

    for(let i = 1; i < prices.length; i++) {
        //new buy price
        if(prices[i] < prices[i-1]) {
            // capture profit
            totalProfit += currentMaxProfit;
            currentMaxProfit = 0;
            buyPrice = prices[i];
        } else {
            const diff = prices[i] - buyPrice;
            if(diff > currentMaxProfit) {
                currentMaxProfit = diff;
            }
        }
    }
    
    totalProfit += currentMaxProfit;
    return totalProfit;
}

const input1 = [7,1,5,3,6,4];
const input2 = [1,2,3,4,5];
const input3 = [1,2,3,1,4,5];
const input4 = [7,6,4,3,1];
console.log(maxProfit2(input1));
console.log(maxProfit2(input2));
console.log(maxProfit2(input3));
console.log(maxProfit2(input4));