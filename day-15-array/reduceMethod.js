const prices = [2, 2, 12, 33, 78];

const total = prices.reduce(sum);

console.log (`Total price ${total}`)

function sum(prev, next){
    return prev + next;
}

