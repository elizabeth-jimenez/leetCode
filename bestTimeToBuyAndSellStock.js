function maxProfit(prices) {
    let maxP = 0;
    let buyPrice = prices[0];

    prices.forEach(element => {
        if(element < buyPrice) {
            buyPrice = element;
        } else {
            const diff = element - buyPrice;
            if(diff > maxP) {
                maxP = diff;
            }
        }
    });

    return maxP;
}

console.log(maxProfit([7,1,5,3,6,4]));